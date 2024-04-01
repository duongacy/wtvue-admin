import type { Schema, Attribute } from '@strapi/strapi';

export interface ProfileProject extends Schema.Component {
  collectionName: 'components_profile_projects';
  info: {
    displayName: 'Project';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    company: Attribute.Relation<
      'profile.project',
      'oneToOne',
      'api::company.company'
    >;
    libraries: Attribute.Relation<
      'profile.project',
      'oneToMany',
      'api::library.library'
    >;
    responsibilities: Attribute.JSON;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface ProfileWorkExperience extends Schema.Component {
  collectionName: 'components_profile_work_experiences';
  info: {
    displayName: 'WorkExperience';
    description: '';
  };
  attributes: {
    from: Attribute.Date & Attribute.Required;
    to: Attribute.Date & Attribute.Required;
    location: Attribute.String;
    role: Attribute.String & Attribute.Required;
    company: Attribute.Relation<
      'profile.work-experience',
      'oneToOne',
      'api::company.company'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'profile.project': ProfileProject;
      'profile.work-experience': ProfileWorkExperience;
    }
  }
}
