import { EntityRepository, Repository } from "typeorm";
import Surveys from "../entities/Surveys";

@EntityRepository(Surveys)
class SurveysRepository extends Repository<Surveys> {
  
}

export default SurveysRepository;