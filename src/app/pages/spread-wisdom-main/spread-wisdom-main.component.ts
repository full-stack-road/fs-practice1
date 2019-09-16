import { Component, OnInit } from '@angular/core';

//引用fortawesome
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { faCalendar, faSquare } from '@fortawesome/free-regular-svg-icons';

import { TrainingWithMentorService } from '../training-with-mentor.service';
import { TrainingWithMentor } from '../trainingWithMentor';
import { TrainingHistoryService } from '../training-history-service';
import { TrainingHistory } from '../trainingHistory';


@Component({
  selector: 'app-spread-wisdom-main',
  templateUrl: './spread-wisdom-main.component.html',
  styleUrls: ['./spread-wisdom-main.component.scss']
})
export class SpreadWisdomMainComponent implements OnInit {
  //显示引用fortawesome
  faSearch = faSearch;

  trainings: TrainingWithMentor[] = [];
  trainingHistorys: TrainingHistory[] = [];
  historyInProgress: TrainingHistory[] = [];
  historyCompleted: TrainingHistory[] = [];

  //rating
  max: number = 5;
  isReadonly: boolean = false;

  constructor(library: FaIconLibrary,
    private trainingWithMentorService: TrainingWithMentorService,
    private trainingHistoryService: TrainingHistoryService) {
    //隐式引用fortawesome
    library.addIcons(faSearch);
  }

  sendProposal(training: TrainingWithMentor) {
    window.alert("send proposal to mentor " + training.mentor);
  }

  getTrainingWithMentors(): void {
    this.trainingWithMentorService.getTrainingWithMentors()
      .subscribe(trainings => this.trainings = trainings);
  }
  getTrainingHistory(): void {
    this.trainingHistoryService.getTrainingHistorys()
      .subscribe(trainingHistorys => {
        this.trainingHistorys = trainingHistorys;
        this.trainingHistorys.forEach(elem => {
          (elem.trainingStatus === 'F') ? this.historyCompleted.push(elem) : this.historyInProgress.push(elem)
        });
      }
      );
  }

  ngOnInit() {
    this.getTrainingWithMentors();
    this.getTrainingHistory();
  }
}
