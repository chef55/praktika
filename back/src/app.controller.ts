import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request, Response } from 'express';
import {findPk,findTk} from './calculations'
@Controller()
export class AppController {

  @Get()
  getHello() {
    console.log('Got')
    return 'Hello'
  }

  @Post()
  calculateValues(@Req() request: Request){
    console.log('Posted')
    const {L,d,dst,K,Ksr,E,To,Pn,Tn,q}=request.body
    let Pk=findPk(L,d,dst,K,Ksr,E,To,Pn,Tn,q)
    let Tk=findTk(L,d,dst,K,Ksr,E,To,Pn,Tn,q,Pk)
    return {T:Tk.toFixed(4),P:Pk.toFixed(4)}
  }
}
