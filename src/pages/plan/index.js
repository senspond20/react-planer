import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './style.css'
import { useRef } from 'react';

// import styled from 'styled-components';

const localizer = momentLocalizer(moment)
const myEventsList =
    [
        {
            'title' : '참가신청',
            'allDay' : false,
            'start' : new Date(2021, 7, 31, 23, 59),
            'end'   : new Date(2021, 7, 31, 23, 59),
            'color'  : 'steelblue'
        },
        {
          'title' : '오리엔테이션',
          'allDay' : false,
          'start' : new Date(2021, 8, 3, 10, 0),
          'end'   : new Date(2021, 8, 3, 11, 10),
          'color'  : 'steelblue'
        },
        {
            'title' : '기능분석',
            'allDay' : false,
            'start' : new Date(2021, 8, 6, 10, 0),
            'end'   : new Date(2021, 8, 12, 11, 10),
            'color'  : 'gray'
        },
        {
            'title' : '추석연휴',
            'allDay' : false,
            'start' : new Date(2021, 8, 20, 0, 0),
            'end'   : new Date(2021, 8, 22, 23, 59),
            'color' : 'pink'
        },

        {
            'title' : '1차 출품작 접수마감',
            'allDay' : false,
            'start' : new Date(2021, 9, 25, 23, 59), // 10.00 AM
            'end'   : new Date(2021, 9, 25, 23, 59), // 2.00 PM
            'color' : 'steelblue'
        },

        {
            'title' : '1차 평가 시연',
            'allDay' : false,
            'start' : new Date(2021, 9, 27, 23, 59), // 10.00 AM
            'end'   : new Date(2021, 9, 27, 23, 59), // 2.00 PM
            'color' : 'steelblue'
        },
        {
            'title' : '2차 평가 발표/시연',
            'allDay' : false,
            'start' : new Date(2021, 9, 29, 0, 0), // 10.00 AM
            'end'   : new Date(2021, 10, 2, 23, 59), // 2.00 PM
            'color' : 'gray'
        },
        {
            'title' : '3차 평가 발표/시연',
            'allDay' : false,
            'start' : new Date(2021, 10, 19, 0, 0), // 10.00 AM
            'end'   : new Date(2021, 10, 24, 23, 59), // 2.00 PM
            'color' : 'gray'
        },
    ]
const korMonth = [{
    kor : '1월',
    en  : ''
}]



const MyCalendar = props => {
   
    const useTitle = useRef();
    const useStart = useRef();
    const useEnd = useRef();

    const formSubmit = (e)=>{
        e.preventDefault(); 
        console.log("gg")
        console.log(useTitle.current.value)
        console.log(useStart.current.value)
        console.log(useEnd.current.value)

    }

    return(
    <div className ="wrapper">
        <div className="plan-wrapper">
            <div className ="calendar-wrapper">
                <Calendar
                    className ="calendar"
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    defalutView ="month"
                    endAccessor="end"
                    style ={ {"height": "800px"}}
                    eventPropGetter={
                        (event, start, end, isSelected) => {
                            let newStyle = {
                                backgroundColor: event.color,
                                color: 'white',
                                borderRadius: "3px",
                                border: "1px",
                                fontWeight : 700
                            };
                            return {
                                className: "",
                                style: newStyle
                            };
                        }
                    }
                    onSelectEvent={event => alert(event.title)}
                    // onSelectSlot={this.handleSelect}
                />
            </div>
            <form onSubmit = {formSubmit}>        
                <div><label>제목</label><input type ="text" name="title" ref={useTitle}/></div>
                <div><label>시작일시</label><input type ="datetime-local" name="start"  ref={useStart}/></div>
                <div><label>종료일시</label><input type ="datetime-local" name="end"  ref={useEnd}/></div>
                <div><input type="submit" value="일정추가"/></div>
                <div><input type="reset" value="초기화"/></div>
            </form>
        </div>
    </div>
    )
}
export default MyCalendar;