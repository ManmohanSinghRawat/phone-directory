import React, { Component } from 'react';
import './App.css';

class App extends Component {
   constructor(props)
   {
      super(props);
      this.state = {
         page : "First",
         data : []
      };
      this.changeList = this.changeList.bind(this);
      this.handlePage = this.handlePage.bind(this);
   }

   enterDataToDirectory(userdata)
   {
      this.state.data.push(userdata); 
      
   }

   changePage()
   {
      if(this.state.page === 'First')
         this.setState({
            page : "Second",
         });
      else 
         this.setState({
            page : "First",
         });
   }

   changeList(ele)
   {
      var a = this.state.data;
      var b =a[ele];

      this.setState({
         data : a.filter(a => a !== b)
      });
   }

   handlePage()
   {
      if(this.state.page === 'First')
         return (
            <div>
               <Header className='HeaderStyle'/>
               <CHANGEPAGE className='PageButton' name="ADD NEW CONTACT" page={this.changePage.bind(this)}/>
               <SHOWALLINDIRECTORY classTableName='Table' classTableBodyName='TableBody' classTableHeadName='TableHead' data={this.state.data} del={this.changeList.bind(this)} updateTable={this.handlePage.bind(this)} />
            </div>
         );
      else if(this.state.page === 'Second')
      return (
         <div>
            <Header className='HeaderStyle' />
            <CHANGEPAGE className='PageButton' name="BACK" page={this.changePage.bind(this)}/>
            <TAKEDATAINDIRECTORY classFORMSHOWName='FORMSHOW' classFORMDATAName='FORMDATA' classSUBMITBUTTONName='SUBMITBUTTON' classUSERName='USER' classPASSName='PHONE' data={this.enterDataToDirectory.bind(this)}/>
         </div>
      );
   }

   render() {
      return (
         <div>
            {this.handlePage()}
         </div>
      );
   }
}

class Header extends Component{
   render()
   {
      return(
         <div className={this.props.className}>
            PHONE DIRECTORY
         </div>
      );
   }
}

class SHOWALLINDIRECTORY extends Component{
 
   render()
   {
      var de = this.props.del;
      var i=-1;
      var userdetail = this.props.data.map(function(contact) { 
         i++;
         return(
             <TROW num={i} name={contact.name} del={de} number={contact.number}  />
         )
     });
       
      return(

         <div>
            <table className={this.props.classTableName}>
               <thead className={this.props.classTableHeadName}>
                  <tr>
                     <th>Name</th> 
                     <th>Number</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               <tbody className={this.props.classTableBodyName} updateTable={this.props.updateTable}>
                  {userdetail}
               </tbody>
            </table>
         </div>
      );
   }
}

class TAKEDATAINDIRECTORY extends Component{

   constructor(props){
      super(props);

      this.state = {
         name: '',
         number:''
      };

      this.changeName = this.changeName.bind(this);
      this.changeNumber = this.changeNumber.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   changeName(e)
   {
     this.setState({
        name : e.target.value,
     });
   }
   changeNumber(e)
   {
      this.setState({
         number : e.target.value,
      });
   }
   handleSubmit(e){
       e.preventDefault();
      var d = {
         name: this.state.name, 
         number : this.state.number
      };

      this.props.data(d);
   }
   render()
   {
      return(
         <div>
           <form onSubmit={this.handleSubmit} className={this.props.classFORMSHOWName} >
               <span className={this.props.classUSERName}>
                  Username : <input placeholder="Username" onChange={this.changeName} type="text" />  
               </span>
               <br />
               <span className={this.props.classPASSName}>
                  Phone : <input placeholder="XXXXXXXXXX" onChange={this.changeNumber} type="text" /> <br />
               </span>
              <br /><br />
              <span className={this.props.classFORMDATAName}>
                 Enter data is: <br />
                 Name: <span>{this.state.name}</span><br />
                 Number: <span >{this.state.number}</span><br />
              </span>
              <button type='submit' className={this.props.classSUBMITBUTTONName} >Add Contact</button>
           </form>
         </div>
      );
   }
}

class CHANGEPAGE extends Component{
   render()
   {
      return(
         <div>
           <button className={this.props.className} onClick={() => this.props.page()}>{this.props.name}</button>
         </div>
      );
   }
}

class TROW extends Component{

   constructor(props){
      super(props);

      this.deleteContact = this.deleteContact.bind(this);
   }

   deleteContact(e)
   {
      //console.log(e.target.value);
      return this.props.del(e.target.value);
   }
   render()
   { 
      return(
         <tr>
            <td>{this.props.name}</td>
            <td>{this.props.number}</td>
            <td><button value={this.props.num} onClick={this.deleteContact}>Delete</button></td>
         </tr>
      );
   }
}

export default App;