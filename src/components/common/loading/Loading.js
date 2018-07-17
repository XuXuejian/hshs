import React, {Fragment} from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
  loading: state.get('loading')
})

const Loading = (props) => {
  return (
    <Fragment>
    {
      props.loading &&
      <div class="bigger">
        <div class="ld-circle">
          <div class="ld-circle1 ld-child"></div>
          <div class="ld-circle2 ld-child"></div>
          <div class="ld-circle3 ld-child"></div>
          <div class="ld-circle4 ld-child"></div>
          <div class="ld-circle5 ld-child"></div>
          <div class="ld-circle6 ld-child"></div>
          <div class="ld-circle7 ld-child"></div>
          <div class="ld-circle8 ld-child"></div>
          <div class="ld-circle9 ld-child"></div>
          <div class="ld-circle10 ld-child"></div>
          <div class="ld-circle11 ld-child"></div>
          <div class="ld-circle12 ld-child"></div>
        </div>
      </div>
    }
    </Fragment>
  )
}

export default connect(mapStateToProps)(Loading)
