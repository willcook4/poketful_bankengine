import React from 'react'
import { Modal, Input, Icon, Comment, List } from 'antd'
import { animateScroll } from 'react-scroll'
import styled from 'styled-components'
import { ChatBubble } from './chatBubble'
// import { StyledTextArea as TextArea } from './textarea'
import { StyledButton as Button } from './button'
import ysp from '../images/ysp.jpg'
import userImg from '../images/user.jpg'
import { MessageContext } from '../messageContextProvider'

const { TextArea } = Input

const YSPImg = ({name}) => {  
  return (
    <YSP src={ysp} alt={name} />
  )
}

const YSPFirstName = 'George'
const YSPLastName = 'Orwell'
  
// Youth Support Person
const YSP = styled('img')` 
  width: 32px;
  height: auto;
  border-radius: 50%;
`

const TitleWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Title = styled('span')`
  font-size: 1.2em;
  font-weight: bold;
`
const Position = styled('p')`
  margin-bottom: 0;
  color: grey;
  margin-top: -4px;
  font-size: 13px;
`

const MessagingHeader = (
  <TitleWrapper>
    <div id='here'>
      <YSPImg name={`${YSPFirstName} ${YSPLastName}`} />
    </div>
    <div style={{marginLeft: '8px', marginBottom: '-4px'}}>
      <Title>{`${YSPFirstName} ${YSPLastName}`}</Title>
      <Position>Youth Service provider</Position>  
    </div>
    <div style={{marginTop: '10px', paddingLeft: '8px'}}>  
      <div style={{display: 'flex', flexDirection: 'column'}}> 
        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
        <span style={{fontSize: '9px', marginTop: '-3px'}}>online</span>
      </div>
    </div>
  </TitleWrapper>
)

export class Messaging extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      showLoading: false
    }

    this.textAreaRef = React.createRef()
    this.messagesEndRef = React.createRef()
  }

  
  componentDidMount() {
    this.scrollToBottom()
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  scrollToBottom() {
    animateScroll.scrollToBottom({
    containerId: 'msg-history'
    })
  }

  showModal = () => {
    this.setState({
      visible: true
    }, () => {
      setTimeout(() =>  this.scrollToBottom())
    })
  }

  handleCancel = e => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <MessageContext.Consumer>
        {(context) => (
          <React.Fragment>
            <React.Fragment>
              <ChatBubble action={(e) => {
                this.showModal()
              }} />

              <Modal
                title={MessagingHeader}
                visible={this.state.visible}
                onCancel={this.handleCancel}
                footer={null}
              >
                <div
                  style={{maxHeight: '200px', overflow: 'auto', marginBottom: '16px'}}
                  id='msg-history'>
                  {context.msgHistory && context.msgHistory.msgHistory.length > 0 ?
                    (<List
                      itemLayout='horizontal'
                      dataSource={context.msgHistory.msgHistory}
                      renderItem={item => (
                        <li style={{
                          marginTop: '4px',
                          marginBottom: '4px',
                          borderRadius: '10px',
                          paddingLeft: '14px',
                          paddingRight: '14px',
                          backgroundColor: item.from === 'user' ? 'lightyellow' : 'white'
                          }}>
                          <Comment
                            actions={[]}
                            author={item.from === 'user' ? 'Danielle' : YSPFirstName} // hardcoded?!!!
                            avatar={item.from === 'user' ? userImg : ysp }
                            content={item.txt}
                            datetime={item.timeStamp}
                          />
                      </li> )} />) : null}

                </div>
                
                {/* Msg creation */}
                {!this.state.showLoading ? (<div
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                      if(this.textAreaRef.current.textAreaRef.value) {
                        context.createMsg(this.textAreaRef.current.textAreaRef.value)
                        this.textAreaRef.current.textAreaRef.value = '' // clear the input box
                        this.setState({showLoading: true})
                        this.scrollToBottom(this.messagesEndRef)
                        setTimeout(() => { this.setState({showLoading: false})}, 1000)
                      }
                    }
                  }}
                >
                  <TextArea
                    rows={4}
                    placeholder='Write your message here...'
                    style={{marginBottom: '8px'}}
                    ref={this.textAreaRef}
                  />
                  <Button
                    // disabled={} // TODO disable if the text box is empty
                    align='right'
                    type='primary'
                    onClick={async (e) => {
                      if(this.textAreaRef.current.textAreaRef.value) {                
                        context.createMsg(this.textAreaRef.current.textAreaRef.value)
                        this.textAreaRef.current.textAreaRef.value = '' // clear the input box
                        this.setState({showLoading: true})
                        this.scrollToBottom(this.messagesEndRef)
                        setTimeout(() => { this.setState({showLoading: false})}, 1000)
                      }
                    }}>Send</Button>
                  </div>) : <div>{/* Placeholder */}</div>}
                {this.state.showLoading ? (
                <div style={{display: 'flex',
                             flexDirection: 'column',
                             textAlign: 'center'}}>
                    <Icon type="loading" />
                    <p style={{marginTop: '20px'}}>Sending...</p>
                  </div>) : null}
              </Modal>
            </React.Fragment>
          </React.Fragment>  
        )}
      </MessageContext.Consumer>
    )
  }
}
