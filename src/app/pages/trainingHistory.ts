import { TrainingWithMentor } from './trainingWithMentor';

export class TrainingHistory {
  historyId: Number;
  training: TrainingWithMentor;

  trainer: String;
  proposal: String;
  trainingStatus: String;
  rating: Number;
  // Status
  // P: sent proposal
  // C: confirmed not charged
  // A: charged/avialable
  // S: started
  // F: finished
}