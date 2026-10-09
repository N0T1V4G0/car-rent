interface Course {
  name: string;
  educator: string;
  duration: number;
}

class CreateCourseService {
  execute({ name, educator, duration }: Course) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();
