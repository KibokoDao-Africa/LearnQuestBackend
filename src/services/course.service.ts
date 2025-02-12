// services/course.service.ts
import Course from '../models/Course';

export const createNewCourse = async (title: string, description: string, modules: string[], creator?: string) => {
  return await Course.create({ title, description, modules, creator });
};

export const getAllCourses = async () => {
  return await Course.find().populate('creator');
};
