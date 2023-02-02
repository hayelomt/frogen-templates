import { GradeService } from '../../features/grades/logic/services/contracts/grade-service';
import { GradeServiceStorage } from '../../features/grades/logic/services/grade-service-storage';
import { StudentService } from '../../features/students/logic/services/contracts/student-service';
import StudentServiceStorage from '../../features/students/logic/services/student-service-storage';
import { StorageFactory } from '../services/storage/storage-factory';

export const Factories = {
  getStudentService: (): StudentService => {
    return new StudentServiceStorage(StorageFactory.getInstance());
  },

  getGradeService: (): GradeService => {
    return new GradeServiceStorage(StorageFactory.getInstance());
  },
};
