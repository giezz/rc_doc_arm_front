import {IPatient} from "../models/IPatient";

export const patients: IPatient[] = [
  {
    id: 1,
    firstName: "Анна",
    middleName: "Ивановна",
    lastName: "Смирнова",
    gender: "Женский",
    birthDate: "1990-05-15",
    status: "Проходит реабилитацию",
  },
  {
    id: 2,
    firstName: "Александр",
    middleName: "Петрович",
    lastName: "Кузнецов",
    gender: "Мужской",
    birthDate: "1985-12-03",
    status: "Нуждается в реабилитации",
  },
  {
    id: 3,
    firstName: "Елена",
    middleName: "Николаевна",
    lastName: "Иванова",
    gender: "Женский",
    birthDate: "1978-08-22",
    status: "Проходил реабилитацию ранее",
  },
  {
    id: 4,
    firstName: "Дмитрий",
    middleName: "Сергеевич",
    lastName: "Соколов",
    gender: "Мужской",
    birthDate: "1982-02-10",
    status: "Нуждается в реабилитации",
  },
  {
    id: 5,
    firstName: "Мария",
    middleName: "Александровна",
    lastName: "Петрова",
    gender: "Женский",
    birthDate: "1995-06-25",
    status: "Проходит реабилитацию",
  },
];
