import React, { Fragment } from 'react'
import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react';

const HomePage = ({ history }) => {
  return (
    <Fragment>
      <Segment inverted textAlign='center' vertical className='masthead'>
        <Container text>
          <Header as='h1' inverted>
            <Image
              size='massive'
              src={`${window.location.origin}/assets/images/logo.png`}
              alt='logo'
              style={{ marginBottom: 12 }}
            />
            Events App
          </Header>
          {/* when we are using React Router our components receive automatically history object as prop
              whe can use it as Link component to redirect with push method */}
          <Button size='huge' inverted onClick={() => history.push('/events')}>
            Get started
            <Icon name='right arrow' inverted />
          </Button>
        </Container>
      </Segment>
    </Fragment>
  )
}

export default HomePage
