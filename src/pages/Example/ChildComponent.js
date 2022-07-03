import React from 'react';

class ChildComponent extends React.Component {
    state = {
        showJob: false
    }

    handleShowHide = () =>{
        this.setState ({
            showJob: !this.state.showJob
        })
    }

    handleOnClickDelete = (job) => {
        console.log(job)
        this.props.deleteJob(job)
    }

    render(){
        let {arrJob} = this.props
        let {showJob} = this.state
        return (
            <div>
                {showJob === false ?
                    <div >
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                :
                    <>
                        <div className='job-lists'>
                            {
                                arrJob.map((item, index) => {
                                    return(
                                        <div  key={item.id}>
                                            {item.title} - {item.salary} <></> 
                                            <span onClick={() => this.handleOnClickDelete(item)}>X</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </div>
        )
    }
}


// const ChildComponent = (props) => {
//     let {arr} = props;

//     return (
//         <>  
//             <div className='job-list'>
//                 {
//                     arr.map((item, index) => {
//                         if (item.salary >= 500){
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }
                       
//                     })
//                 }
//             </div>
//             <div><button>Hide</button></div>
//         </>
//     )
   
// }


export default ChildComponent;