import type { Schema, Attribute } from '@strapi/strapi';

export interface ProfileCertification extends Schema.Component {
  collectionName: 'components_profile_certifications';
  info: {
    displayName: 'Certification';
    description: '';
  };
  attributes: {
    field: Attribute.String & Attribute.Required;
    organization: Attribute.String & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
  };
}

export interface ProfileCommunity extends Schema.Component {
  collectionName: 'components_profile_communities';
  info: {
    displayName: 'Activity';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    description: Attribute.Text;
  };
}

export interface ProfileEducation extends Schema.Component {
  collectionName: 'components_profile_educations';
  info: {
    displayName: 'Education';
    description: '';
  };
  attributes: {
    major: Attribute.String & Attribute.Required;
    organization: Attribute.String & Attribute.Required;
    from: Attribute.Date & Attribute.Required;
    to: Attribute.Date & Attribute.Required;
  };
}

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
    from: Attribute.Date & Attribute.Required;
    to: Attribute.Date & Attribute.Required;
  };
}

export interface ProfileSkill extends Schema.Component {
  collectionName: 'components_profile_skills';
  info: {
    displayName: 'Skill';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface ProfileTechnology extends Schema.Component {
  collectionName: 'components_profile_technologies';
  info: {
    displayName: 'Technology';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
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
      'profile.certification': ProfileCertification;
      'profile.community': ProfileCommunity;
      'profile.education': ProfileEducation;
      'profile.project': ProfileProject;
      'profile.skill': ProfileSkill;
      'profile.technology': ProfileTechnology;
      'profile.work-experience': ProfileWorkExperience;
    }
  }
}
