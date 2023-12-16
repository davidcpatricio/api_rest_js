import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      first_name: 'Maria',
      last_name: 'Almeida',
      email: 'maria@email.com',
      age: 18,
      weight: 50,
      height: 1.6,
    });
    res.json(newStudent);
  }
}

export default new HomeController();
