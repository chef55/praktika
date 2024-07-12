import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request, Response } from 'express';

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
    const {L,Dvn,dst,Kekv,Kto,Kef,Tos,Pvh,Tvh,Q}=request.body
    const responseData={
      T: parseFloat(L)+parseFloat(Dvn),
      P: parseFloat(dst)-parseFloat(Kekv)
    }
    return responseData
  }
}
