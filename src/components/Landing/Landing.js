import React, { useState } from 'react'

import Item from './Item/Item';
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import Writing from '../Writing/Writing'
import Sandbox from '../Sandbox/Sandbox'

import './Landing.scss'
// ?? Landing use to be container
// ?? ItemTitle use to be itemlink
export default function Landing(props) {

  const [aboutActive, setAboutActive] = useState(false)
  const [contactActive, setContactActive] = useState(false)
  const [projectsActive, setProjectsActive] = useState(false)
  const [writingActive, setWritingActive] = useState(false)
  const [sandboxActive, setSandboxActive] = useState(false)
  const [makeTiny, setMakeTiny] = useState(false)
  const [landingActive, setLandingActive] = useState(true)

  const handleAboutTransition = () => {
    setAboutActive(!aboutActive)
    setLandingActive(!landingActive)
    setMakeTiny(!makeTiny)
  }

  const handleContactTransition = () => {
    setContactActive(!contactActive)
    setLandingActive(!landingActive)
    setMakeTiny(!makeTiny)
  }

  const handleProjectsTransition = () => {
    setProjectsActive(!projectsActive)
    setLandingActive(!landingActive)
    setMakeTiny(!makeTiny)
  }

  const handleWritingTransition = () => {
    setWritingActive(!writingActive)
    setLandingActive(!landingActive)
    setMakeTiny(!makeTiny)
  }

  const handleSandboxTransition = () => {
    setSandboxActive(!sandboxActive)
    setLandingActive(!landingActive)
    setMakeTiny(!makeTiny)
  }

  return (
    <>

      <div className={`Landing ${!landingActive && "Landing--active"}`}>
        <Item
          makeTiny={makeTiny}
          // isFirst={true}
          isActive={aboutActive}
          content={About()}
          handleTransition={handleAboutTransition}
          temp="about"
          background="A"
        />

        <Item
          makeTiny={makeTiny}
          isActive={contactActive}
          content={Contact()}
          handleTransition={handleContactTransition}
          temp="contact"
          background="B"
        />

        <Item
          makeTiny={makeTiny}
          isActive={projectsActive}
          content={Projects()}
          handleTransition={handleProjectsTransition}
          temp="projects"
          background="C"
        />

        <Item
          makeTiny={makeTiny}
          isActive={writingActive}
          content={Writing()}
          handleTransition={handleWritingTransition}
          temp="writing"
          background="D"
        />

        <Item
          makeTiny={makeTiny}
          isActive={sandboxActive}
          content={Sandbox()}
          handleTransition={handleSandboxTransition}
          temp="sandbox"
          isLast={true}
          background="E"
        />
      </div>

      {/* <div className="Landing__info">
        <span className="item__E--title item-link-b">Ticknor</span>
      </div> */}
    </>
  )
}
