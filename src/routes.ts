import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function CreateCourse(req: Request, res: Response) {
  CreateCourseService.execute({ name: 'NodeJS', duration: 10, educator: 'Lucas' });
  return res.json({ name: 'NodeJS', duration: 10, educator: 'Lucas' });
}
