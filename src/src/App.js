import React from 'react';
import Card from './components/Card'
import Frame from 'react-frame-component';
import storage from 'local-storage-fallback';
import {
  ThemeProvider,
  createGlobalStyle
} from 'styled-components';
import useTheme from './useTheme';
import ToggleMode from './ToggleMode';
import style from 'styled-theming';
import './styles.css';

const theme = useTheme();

const getBackground = style('mode', {
  light: '#EEE',
  dark: '#111'
});

const getForeground = style('mode', {
  light: '#111',
  dark: '#EEE'
});

const getFontSize = style('textZoom', {
  normal: '1em',
  magnify: '1.2em'
});

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${getBackground};
  color: ${getForeground};
  font-size: ${getFontSize}
}
`;

const REQ_URL = 'https://alpha.nextthought.com/dataserver2/++etc++hostsites/alpha.nextthought.com/++etc++site/Courses/DefaultAPICreated/OUCS-1/CourseCatalogEntry'
class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      courses: []
    }
  }

  componentDidMount = () => {
    fetch(REQ_URL, {
      headers: {
        'X-Requested-With': 'XMLHTTPRequest'
      }
    }).then(response => response.json().then(courseCatalog => this.setState({courses: [courseCatalog]})) )
  }

  render(){
    return (
        <Frame style={{width: '100%', border: 'none'}}>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    <div className="App">
                        {this.state.courses.map(course => <Card title={course.title} description={course.RichDescription} />)}
                    </div>
                    <ToggleMode />
                </>
            </ThemeProvider>
        </Frame>
    )
  }
}

export default App;
