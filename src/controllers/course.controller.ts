// controllers/course.controller.ts
import { Request, Response } from 'express';
import Course from '../models/Course';

export const createCourse = async (req: Request, res: Response) => {
  try {
    const { title, description, modules, creator } = req.body;
    const course = await Course.create({ title, description, modules, creator });

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Error creating course' });
  }
};

export const getCourses = async (req: Request, res: Response) => {
  try {
    const courses = await Course.find().populate('creator');
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses' });
  }
};
