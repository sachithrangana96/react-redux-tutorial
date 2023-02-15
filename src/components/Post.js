import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions'
import './style.css'

 class Post extends Component {


    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        const {Posts} = this.props;
        return (
          
            <div style={{padding:'20px'}}>

                {
                    Posts.error ? (
                        <h5 style={{color:'red',fontFamily:'bold',textAlign:'center'}}>{Posts.error.message}</h5>
                    ) 
                    :
                    (
                        <table style={{width:'60%'}} align="center">
                    <tr>
                        <th>User ID</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                    <tbody>
                        {
                            Posts?.data?.map((post)=>{
                                return(
                                   <tr style={{}}>
                                        <td>{post.userId}</td>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.body.substr(0,80)}</td>
                                   </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                    )
                }
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        Posts:state?.Posts
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchPosts:fetchPosts},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(Post);
