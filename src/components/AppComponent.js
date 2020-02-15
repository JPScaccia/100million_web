import React from 'react'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import { StickyContainer, Sticky } from 'react-sticky'
import { history } from '../store'
import HomePageContainer from './HomePageContainer'
import SurveyPageContainer from './SurveyPageContainer'
import DashboardPageContainer from './DashboardPageContainer'
import AboutPageContainer from './AboutPageContainer'
import FaqPageContainer from './FaqPageContainer'
import RttPageContainer from './RttPageContainer'
import SignUpPageContainer from './SignUpPageContainer'
import SignInPageContainer from './SignInPageContainer'
import AccountPageContainer from './AccountPageContainer'
import AppMenuComponent from './navbar/AppMenuComponent'
import FooterComponent from './FooterComponent'


const AppComponent = (props) => {
  const { isAuthenticated, signOut, username } = props

  return (
    <ConnectedRouter history={history}>
      <div>
        <StickyContainer>
          <Sticky>
            {({ style }) => {
              return (
                <div
                  className='navbar'
                  style={style}>
                  <AppMenuComponent
                    isAuthenticated={isAuthenticated}
                    onSignout={signOut}
                    username={username} />
                </div>
              )
            }}
          </Sticky>
          <main>
            <Switch>
              <Route
                exact
                path="/"
                component={HomePageContainer} />
              <Route
                exact
                path="/surveys"
                component={SurveyPageContainer} />
              <Route
                exact
                path="/dashboard"
                component={DashboardPageContainer} />
              <Route
                exact
                path="/rtt"
                component={RttPageContainer} />
              <Route
                exact
                path="/faq"
                component={FaqPageContainer} />
              <Route
                exact
                path="/about"
                component={AboutPageContainer} />
              <Route
                exact
                path="/account"
                component={AccountPageContainer} />
              <Route
                exact
                path="/signin"
                component={SignInPageContainer} />
              <Route
                exact
                path="/signup"
                component={SignUpPageContainer} />
            </Switch>
          </main>
          <footer>
            <FooterComponent />
          </footer>
        </StickyContainer>
      </div>
    </ConnectedRouter>
  )
}

export default AppComponent
