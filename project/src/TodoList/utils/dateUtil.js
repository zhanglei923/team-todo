import moment from 'moment';

const m = new Map(); // 空Map
m.set('1', '一');
m.set('2', '二');
m.set('3', '三');
m.set('4', '四');
m.set('5', '五');
m.set('6', '六');
m.set('0', '日');

let dateUtil = {
    getTimeSpan:(dateMom, todayMom, is)=>{
        if(is==='begin') dateMom.hours(9-1) && dateMom.minutes(0)
        if(is==='end') dateMom.hours(19-1) && dateMom.minutes(0)
        const dateDate = dateMom.toDate();
        //todayMom.hours(19-1)
        const todayDate = todayMom.toDate();
        //console.log('?', dateDate*1 , todayDate*1)
        let offsetMs = dateDate - todayDate;
        let day = offsetMs / (24*60*60*1000)
        day=Math.round(day*10)
        day=(day/10);
        let dayText = (day>0?'+':'')+day+'';
        return dayText;
    },
    getWeekDameName: (date)=>{
        return m.get(moment(date).day()+'');
    }
};
export default dateUtil;
