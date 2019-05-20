import React from 'react'
import { navigate } from 'gatsby-link'
import Selectbox from '../../components/Selectbox'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Write Stories</h1>
              <form
                name="write-stories"
                method="post"
                action="/write-stories/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="write-stories" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label>1) I am a... </label><br/>
                  <Selectbox label={"Student"} name={'identity'} onChange={this.handleChange} type={'radio'} />
                  <Selectbox label={"Parent"} name={'identity'} onChange={this.handleChange} type={'radio'} />
                  <Selectbox label={"Teacher"} name={'identity'} onChange={this.handleChange} type={'radio'} />
                </div>
                <div className="field">
                  <label className="label">
                    2)  Have you, your child, your student ever been harassed/bullied in school by (check all that apply)
                  </label><br/>
                  <Selectbox
                    label={"School Security Personnel (SSAs, SROs, etc.)"}
                    name={'bulliedBy[]'}
                    onChange={this.handleChange}
                    type={'checkbox'}
                  />
                  <Selectbox
                    label={"Police"}
                    name={'bulliedBy[]'}
                    onChange={this.handleChange}
                    type={'checkbox'}
                  />
                  <Selectbox
                    label={"Teacher"}
                    name={'bulliedBy[]'}
                    onChange={this.handleChange}
                    type={'checkbox'}
                  />
                  <Selectbox
                    label={"Principle"}
                    name={'bulliedBy[]'}
                    onChange={this.handleChange}
                    type={'checkbox'}
                  />
                  <Selectbox
                    label={"Dean"}
                    name={'bulliedBy[]'}
                    onChange={this.handleChange}
                    type={'checkbox'}
                  />
                  <Selectbox
                    label={"Guidance Counselor"}
                    name={'bulliedBy[]'}
                    onChange={this.handleChange}
                    type={'checkbox'}
                  />
                  <Selectbox
                    label={"Supervisor"}
                    name={'bulliedBy[]'}
                    onChange={this.handleChange}
                    type={'checkbox'}
                  />
                  <Selectbox
                    label={"Superintendent"}
                    name={'bulliedBy[]'}
                    onChange={this.handleChange}
                    type={'checkbox'}
                  />
                  <Selectbox
                    label={"Other"}
                    name={'bulliedBy[]'}
                    onChange={this.handleChange}
                    type={'checkbox'}
                  />
                </div>
                <div className="field">
                  <label className="label">
                    4) What were the impacts of the experience you faced? (Check all that apply)
                  </label>
                  <Selectbox
                    label={"Made me feel like I was worthless/they didn’t care or didn’t want to help me"}
                    name={'impacts[]'}
                    onChange={this.handleChange}
                    type={'checkbox'}
                  />
                  <Selectbox
                    label={"Increased my level of fear and anxiety being in school"}
                    name={'impacts[]'}
                    onChange={this.handleChange}
                    type={'checkbox'}
                  />
                  <Selectbox
                    label={"Made me feel ashamed and uncomfortable"}
                    name={'impacts[]'}
                    onChange={this.handleChange}
                    type={'checkbox'}
                  />
                  <Selectbox
                    label={"Made me not want to go to/be in school"}
                    name={'impacts[]'}
                    onChange={this.handleChange}
                    type={'checkbox'}
                  />
                  <Selectbox
                    label={"I was punished (Suspended, detention, expelled, given more work, etc.)"}
                    name={'impacts[]'}
                    onChange={this.handleChange}
                    type={'checkbox'}
                  />
                  <Selectbox
                    label={"I could not focus and by grades/work suffered"}
                    name={'impacts[]'}
                    onChange={this.handleChange}
                    type={'checkbox'}
                  />
                  <Selectbox
                    label={"Felt depressed and hopeless"}
                    name={'impacts[]'}
                    onChange={this.handleChange}
                    type={'checkbox'}
                  />
                  <Selectbox
                    label={"Afraid to speak out and or ask for help"}
                    name={'impacts[]'}
                    onChange={this.handleChange}
                    type={'checkbox'}
                  />
                  <Selectbox
                    label={"Afraid to be your full self in school"}
                    name={'impacts[]'}
                    onChange={this.handleChange}
                    type={'checkbox'}
                  />
                </div>
                <div className="field">
                  <label className="label">
                    5) Were you able to resolve the situation?
                  </label><br/>
                  <Selectbox
                    label={"Yes"}
                    name={'resolved'}
                    onChange={this.handleChange}
                    type={'checkbox'}
                  />
                  <Selectbox
                    label={"No"}
                    name={'unresolved'}
                    onChange={this.handleChange}
                    type={'checkbox'}
                  />
                  <label className="label">
                    If yes, how?
                  </label>
                  <input
                    className="input"
                    type={'text'}
                    name={'resolution'}
                    onChange={this.handleChange}
                    required={false}
                  />
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}