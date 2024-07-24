
    const mu = 1345 * 1e-8
    const delta = 0.7110
    const deltaRe = 0.8564
    const Zsr= 0.7438
    const Di = 4.7446
    const Сp = 2.3935
    const e = 2.71828

    function Psr(L,d,dst,K,Ksr,E,To,Pn,Tn,q,Pk){
        return 2/3*(Pn+Pk*Pk/(Pn+Pk))
    }
    
    function a(L,d,dst,K,Ksr,E,To,Pn,Tn,q,Pk){
        const dn=d+dst
        return 225.5*Ksr*dn/(q*delta*Сp*10**6)
    }
    
    function Re(L,d,dst,K,Ksr,E,To,Pn,Tn,q,Pk){
      return 17.75*10**3*q*deltaRe/(d*mu)
    }
    
    function lambda(L,d,dst,K,Ksr,E,To,Pn,Tn,q,Pk){
      const ReVar=Re(L,d,dst,K,Ksr,E,To,Pn,Tn,q,Pk)
      return (0.067*(158/ReVar+2*K/d)**0.2)/E**2
    }
    
    function Tsr1(L,d,dst,K,Ksr,E,To,Pn,Tn,q,Pk){
      const aVar=a(L,d,dst,K,Ksr,E,To,Pn,Tn,q,Pk)
      const PsrVar=Psr(L,d,dst,K,Ksr,E,To,Pn,Tn,q,Pk)
      return 273.15+To+(Tn-To)/(aVar*L)*(1-e**(-aVar*L))-Di*(Pn**2-Pk**2)*(1-(1-e**(-aVar*L))/(aVar*L))/(2*aVar*L*PsrVar)
    }
    
    function Tsr2(L,d,dst,K,Ksr,E,To,Pn,Tn,q,Pk){
      const lambdaVar=lambda(L,d,dst,K,Ksr,E,To,Pn,Tn,q,Pk)
      return 3.32**2*10**-12*d**5*(Pn**2-Pk**2)/(lambdaVar*delta*q**2*Zsr*L)
    }
    
    export function findPk(L,d,dst,K,Ksr,E,To,Pn,Tn,q){
      let Pk=Pn/2,start=0,end=Pn
      while(Math.abs(Tsr1(L,d,dst,K,Ksr,E,To,Pn,Tn,q,Pk)-Tsr2(L,d,dst,K,Ksr,E,To,Pn,Tn,q,Pk))>1e-9){
          Pk=(start+end)/2
          if(Tsr1(L,d,dst,K,Ksr,E,To,Pn,Tn,q,Pk)-Tsr2(L,d,dst,K,Ksr,E,To,Pn,Tn,q,Pk)<0){
              start=Pk
          }
          else{
              end=Pk
          }
      }
      return Pk
    }
    
    export function findTk(L,d,dst,K,Ksr,E,To,Pn,Tn,q,Pk){
      const aVar=a(L,d,dst,K,Ksr,E,To,Pn,Tn,q,Pk)
      const PsrVar=Psr(L,d,dst,K,Ksr,E,To,Pn,Tn,q,Pk)
      return To+(Tn-To)*e**(-aVar*L)-Di*(Pn**2-Pk**2)*(1-e**(-aVar*L))/(2*aVar*L*PsrVar)
    }