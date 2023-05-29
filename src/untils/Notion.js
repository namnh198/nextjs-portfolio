import { Client } from "@notionhq/client";
import {
  NOTION_TOKEN,
  SETTING_DB_ID,
  MENU_DB_ID,
  PROJECT_DB_ID,
  NOTE_DB_ID,
} from "./Env";

const notion = new Client({
  auth: NOTION_TOKEN,
});

const Notion = {
  getProperties(param, isGetAllArray) {
    if (!param) {
      return null;
    } else if (
      param &&
      param instanceof Object &&
      "object" in param &&
      param.object === "user"
    ) {
      return param;
    } else if (param && param instanceof Object && "type" in param) {
      return this.getProperties(param[param.type], isGetAllArray);
    } else if (param && param instanceof Array) {
      if (isGetAllArray) {
        return param.map((item) => this.getProperties(item, isGetAllArray));
      } else {
        return this.getProperties(param[0], isGetAllArray);
      }
    } else {
      return param;
    }
  },
  async getSettings() {
    const settings = await notion.databases.query({
      database_id: SETTING_DB_ID,
    });

    return settings.results.reduce((acc, item) => {
      const key = Notion.getProperties(item.properties.name).content;
      const value = Notion.getProperties(item.properties.value).content;
      if (key) {
        acc[key] = value;
      }
      return acc;
    }, {});
  },

  async getMenu() {
    const menu = await notion.databases.query({
      database_id: MENU_DB_ID,
    });

    return menu.results
      .map((item) => {
        return {
          id: item.id,
          title: Notion.getProperties(item.properties.title).content,
          sort: Notion.getProperties(item.properties.sort),
          url: Notion.getProperties(item.properties.url).content,
        };
      })
      .sort((itemA, itemB) => {
        return itemA.sort - itemB.sort;
      });
  },

  async getOptions() {
    return {
      settings: await Notion.getSettings(),
      menu: await Notion.getMenu(),
    };
  },

  async getProjects() {
    const projects = await this.getDataNotion(PROJECT_DB_ID);

    return projects.results.map((project) => {
      return {
        id: project.id,
        title: this.getProperties(project.properties.title)?.content ?? null,
        cover: this.getProperties(project.cover)?.url ?? null,
        published: this.getProperties(project.properties.published) ?? null,
        slug: this.getProperties(project.properties.slug).content,
        url: this.getProperties(project.properties.url) || null,
        tags:
          this.getProperties(project.properties.tags, true).map(
            (x) => x.name
          ) || [],
        authors: this.getProperties(project.properties.authors, true),
        service: this.getProperties(project.properties.service)?.name,
        featured: this.getProperties(project.properties.featured),
        views: this.getProperties(project.properties.views),
      };
    });
  },

  async getNotes(filters = {}, sorts = {}) {
    const notes = await this.getDataNotion(NOTE_DB_ID, filters, sorts);
    return notes.results.map((note) => {
      return {
        id: note.id,
        title: this.getProperties(note.properties.title)?.content ?? null,
        cover: this.getProperties(note.cover)?.url ?? null,
        description:
          this.getProperties(note.properties.description)?.content ?? null,
        published: this.getProperties(note.properties.published) ?? null,
        slug: this.getProperties(note.properties.slug).content,
        tags:
          this.getProperties(note.properties.tags, true).map((x) => x.name) ||
          [],
        authors: this.getProperties(note.properties.authors, true),
        views: this.getProperties(note.properties.views),
      };
    });
  },

  async getTags() {
    const response = await notion.databases.retrieve({
      database_id: NOTE_DB_ID,
    });
    return (
      response.properties.tags.multi_select.options.map((x) => x.name) ?? []
    );
  },

  async getDataNotion(dbId, filters = {}, sorts = {}) {
    filters = Object.entries(filters).map((key, value) => {
      return {
        property: key,
        ...value,
      };
    });
    sorts = Object.entries(sorts).map((key, value) => {
      return {
        property: key,
        ...value,
      };
    });

    return await notion.databases.query({
      database_id: dbId,
      filter: {
        and: [
          {
            property: "status",
            status: {
              equals: "Published",
            },
          },
          ...filters,
        ],
      },
      sorts: [
        {
          property: "published",
          direction: "descending",
        },
        ...sorts,
      ],
    });
  },

  async getProjectsToGallery() {
    const projects = await this.getProjects();
    const galleryLeft = [],
      galleryRight = [];

    for (let i = 0; i < projects.length; i += 3) {
      galleryLeft.push(projects[i]);
      if (i + 1 < projects.length) {
        const subProject = [projects[i + 1]];
        if (i + 2 < projects.length) {
          subProject.push(projects[i + 2]);
        }
        galleryRight.push(subProject);
      }
    }
    return { galleryLeft, galleryRight };
  },
};

export default Notion;
