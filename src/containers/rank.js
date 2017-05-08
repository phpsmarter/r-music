import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { rankListAction } from '../actions/rank'
import Slider from '../components/common/slider'
import Nav from '../components/common/Nav'
import RecommendList from '../components/music/recommendList'
import { Link } from 'react-router-dom'
import Beat from '../components/music/beat'
import Search from '../components/music/search'
import { browserHistory } from 'react-router'

class App extends Component {

  componentDidMount(){
    const { dispatch,data,scrollTop } = this.props
    dispatch(rankListAction())
  }

  render() {
    const { rankList } = this.props
    return (
      <div className='container'>

        {
          rankList.map( (item) => 
            <div style={ style.item }>
              <div style={ style.left }>
                <img src={item.imgurl.replace('{size}',400)}  style={ style.img }/>
              </div>
              <div style={ style.content }>
                  <div style={style.rankname}>{item.rankname }</div>
                  { item.songinfo.map( (song) => <div style={ style.songname } >{song.songname}</div> ) }
              </div>
              <div style={ style.right }>
                >
              </div>
            </div>
          )
        }

      </div>
    )
  }
}

function map(state) {
  return {
    rankList: state.rank.rankList
  }
}

const style = {
  item:{
    display:'flex',
    padding:'1rem'
  },
  left:{
    flex:2
  },
  img:{
    width:'100%'
  },
  content:{
    display:'flex',
    flexDirection:'column',
    flex:5,
    padding:'.6rem'
  },
  rankname:{
    fontSize:'1.3rem'
  },
  songname:{
    width:'13rem',
    textOverflow:'ellipsis',
    whiteSpace:'nowrap',
     overflow:'hidden'
  },
  right:{
    display:'flex',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
}

export default connect(map)(App)
