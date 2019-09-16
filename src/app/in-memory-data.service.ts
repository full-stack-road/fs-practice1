import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const trainingWithMentors = [
      {
        twmId: 1,
        mentor: 'Mark',
        training: 'Angular8',
        experience: 3,
        deliveredTotal: 30,
        avialableTimeStart: '09:00',
        avialableTimeEnd: '18:00',
        feeCharged: 998,
      },
      {
        twmId: 2,
        mentor: 'Hawking',
        training: 'Algorithm',
        experience: 20,
        deliveredTotal: 50,
        avialableTimeStart: '14:00',
        avialableTimeEnd: '22:00',
        feeCharged: 19800,
      },
      {
        twmId: 3,
        mentor: 'Bill Gates',
        training: 'Operation System',
        experience: 40,
        deliveredTotal: 400,
        avialableTimeStart: '06:00',
        avialableTimeEnd: '14:00',
        feeCharged: 18000,
      },
      {
        twmId: 4,
        mentor: '尤雨溪',
        training: 'Vue',
        experience: 10,
        deliveredTotal: 250,
        avialableTimeStart: '10:00',
        avialableTimeEnd: '16:00',
        feeCharged: 2998,
      },
      {
        twmId: 5,
        mentor: 'Rich Kadel',
        training: 'Java Core',
        experience: 25,
        deliveredTotal: 500,
        avialableTimeStart: '00:00',
        avialableTimeEnd: '24:00',
        feeCharged: 4998,
      }
    ]

    const trainingHistorys = [
      {
        historyId: 1,
        training: {
          twmId: 1,
          mentor: 'Mark',
          training: 'Angular8',
          experience: 3,
          deliveredTotal: 30,
          avialableTimeStart: '09:00',
          avialableTimeEnd: '18:00',
          feeCharged: 998,
        },
        trainer: 'Kenny',
        proposal: 'I would like to charge for 800$,is it okay?',
        trainingStatus: 'P',
        rating: 3,
      },
      {
        historyId: 2,
        training: {
          twmId: 5,
          mentor: 'Rich Kadel',
          training: 'Java Core',
          experience: 25,
          deliveredTotal: 500,
          avialableTimeStart: '00:00',
          avialableTimeEnd: '24:00',
          feeCharged: 4998,
        },
        trainer: 'Kenny',
        proposal: 'I would like to charge for 800$,is it okay?',
        trainingStatus: 'C',
        rating: 3,
      },
      {
        historyId: 3,
        training: {
          twmId: 2,
          mentor: 'Hawking',
          training: 'Algorithm',
          experience: 20,
          deliveredTotal: 50,
          avialableTimeStart: '14:00',
          avialableTimeEnd: '22:00',
          feeCharged: 19800,
        },
        trainer: 'Kenny',
        proposal: 'I would like to charge for 800$,is it okay?',
        trainingStatus: 'A',
        rating: 4,
      },
      {
        historyId: 4,
        training: {
          twmId: 3,
          mentor: 'Bill Gates',
          training: 'Operation System',
          experience: 40,
          deliveredTotal: 400,
          avialableTimeStart: '06:00',
          avialableTimeEnd: '14:00',
          feeCharged: 18000,
        },
        trainer: 'Kenny',
        proposal: 'I would like to charge for 800$,is it okay?',
        trainingStatus: 'F',
        rating: 5,
      },
    ]
    return { trainingWithMentors, trainingHistorys };
  }

  // genId(heroes: Hero[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
}

