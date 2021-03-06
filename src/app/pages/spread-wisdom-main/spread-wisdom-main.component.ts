import { Component, OnInit } from '@angular/core';

//引用fortawesome
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { faCalendar, faSquare } from '@fortawesome/free-regular-svg-icons';

import { TrainingWithMentorService } from '../training-with-mentor.service';
import { TrainingWithMentor } from '../trainingWithMentor';
import { TrainingHistoryService } from '../training-history-service';
import { TrainingHistory } from '../trainingHistory';

import { NgxSpinnerService } from "ngx-spinner";


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
    private trainingHistoryService: TrainingHistoryService,
    private spinner: NgxSpinnerService) {
    //隐式引用fortawesome
    library.addIcons(faSearch);
  }

  sendProposal(training: TrainingWithMentor) {
    window.alert("send proposal to mentor " + training.mentor + " and create history");
  }
  modifyProposal(history: TrainingHistory) {
    window.alert("modify proposal of mentor " + history.training.mentor);
  }

  pay(history: TrainingHistory) {
    window.alert("pay for training " + history.training.training);
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
        },
          setTimeout(() => {
            this.spinner.hide("mainSpinner");
          }, 1000)
        );
      }
      );
  }

  ngOnInit() {
    this.getTrainingWithMentors();
    this.getTrainingHistory();
  }
}
