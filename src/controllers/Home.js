import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      first_name: 'Paula',
      last_name: 'Miranda',
      email: 'paula@gmail.com',
      age: 23,
      weight: 57,
      height: 1.70,
    });
    res.json(newStudent);
  }
}

export default new HomeController();
