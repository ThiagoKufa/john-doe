import { Router } from "express";
import { CustomerController } from "../../interfaces/customer/customer-controller";
import {CustomerRepositoryImplementation} from '../../infra/db/repository-implementation'
import { IRequest } from "../../infra/adapters/http/IRequest"
import { IResponse } from "../../infra/adapters/http/IResponse"
import { CreateCustomer } from "../../application/usecases/customer/create-customer/create-customer";

const router = Router();
const repo = new CustomerRepositoryImplementation();
const usecase = new CreateCustomer(repo);
const customerController = new CustomerController(usecase);

router.post("/create", (req:IRequest, res:IResponse) => {
  customerController.createCustomer(req, res);
  
});
//rotas para testes se o banco está funcionando
router.get("/customers", async (req:IRequest, res:IResponse) => { 
  const { page, pageSize } = req.query;
  const customers = await repo.getAll(page, pageSize);
  res.json(customers);
});

export default router;
