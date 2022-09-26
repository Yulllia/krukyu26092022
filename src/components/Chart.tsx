import React, { useEffect, useState } from 'react'
import "./Chart.css"

export interface Chart {
    landing?: string;
    configurator?: string;
    checkOut?: string;
    deal?: string;
}

export interface ChartNumber {
    landing?: number;
    configurator?: number;
    checkOut?: number;
    deal?: number;
}

function Chart() {
    const initialState = {
        landing: '0%',
        configurator: '0%',
        checkOut: '0%',
        deal: '0%'
    }
    const landing = 'landing';
    const configurator = 'configurator';
    const checkout = 'check-out';
    const deal = 'deal';

    const [chart, setChangeChart] = useState<Chart>(initialState);
    const [landings , setLanding] = useState<number>(0);
    const [configurators , setConfigurator] = useState<number>(0);
    const [checkouts , setCheckout] = useState<number>(0);
    const [deals , setDeal] = useState<number>(0);

    const changeTimeChart = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined) => {
        const number = randomNumberInRange(1, 10);
        let obj = Object.assign(chart, {});
        if(!e){
            console.log(landings);
            obj.landing =  `${number*10}%`
            obj.configurator =  `${number*10}%`
            obj.checkOut =  `${number*10}%`
            obj.deal =  `${number*10}%`
        }
        const target = e?.target as HTMLTextAreaElement;
            if(target.value === landing){
                console.log(1);
                setLanding(number);
                obj.landing =  `${number*10}%`
            } else if(target.value === configurator) {
                setConfigurator(number)
                obj.configurator =  `${number*10}%`
            } else if(target.value === checkout) {
                setCheckout(number)
                obj.checkOut =  `${number*10}%`
            } else if(target.value === deal) {
                setDeal(number)
                obj.deal =  `${number*10}%`
            }
            setChangeChart(obj)
    }

     const randomNumberInRange = (min: number, max: number) =>{
        return Math.floor(Math.random() * (max - min + 1)) + min;
     }

    useEffect(() => {
        const interval = setInterval(() => {
            setLanding(randomNumberInRange(1,10))
            setConfigurator(randomNumberInRange(1,10))
            setCheckout(randomNumberInRange(1,10))
            setDeal(randomNumberInRange(1,10))
            changeTimeChart()
        }, 34200);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

  return (
    <div className='center'>
        <h2 className='title'>Spent time (seconds)</h2>
        <div className='chart-row'>
            <div>
            <p>Landing Page</p>
            </div>
        <div className='chart-box'>
            <div className='time'>
                <div data-testid = 'landingNumber' className='time-level' style={{width: chart.landing}}><span>{landings}</span></div>
            </div>
        </div>
        </div>
        <div className='chart-row'>
        <div><p>Configurator</p></div>
        <div className='chart-box'>
            <div className='time'>
                <div className='time-level' style={{width: chart.configurator}}><span>{configurators}</span></div>
            </div>
        </div>
        </div>
        <div className='chart-row'>
        <div><p>Check-out</p></div>
        <div className='chart-box'>
            <div className='time'>
                <div className='time-level' style={{width: chart.checkOut}}><span>{checkouts}</span></div>
            </div>
        </div>
        </div>
        <div className='chart-row'>
        <div><p>Deal</p></div>
        <div className='chart-box'>
            <div className='time'>
                <div className='time-level' style={{width: chart.deal}}><span>{deals}</span></div>
            </div>
        </div>
        </div>
        <div className='button-block'>
        <button data-testid = "landing" className='button-chart' value="landing" onClick={(e)=>changeTimeChart(e)}>Landing Page</button>
        <button data-testid = "configurator" className='button-chart' value="configurator" onClick={(e)=>changeTimeChart(e)}>Configurator</button>
        <button data-testid = "check-out"className='button-chart' value="check-out" onClick={(e)=>changeTimeChart(e)}>Check-out</button>
        <button data-testid = "deal" className='button-chart' value="deal" onClick={(e)=>changeTimeChart(e)}>Deal</button>
        </div>
    </div>
  )
}

export default Chart