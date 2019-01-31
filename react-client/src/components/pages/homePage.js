import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <body>
        <div id="index-banner" class="parallax-container">
          <div class="section no-pad-bot">
            <div class="container">
              <br />
              <br />
              <h1 class="header center white-text">luke geiken</h1>
              <div class="row center">
                <a class="not-active" href="https://www.linkedin.com/in/lucas-geiken-39484461" target="_blank">
                  <i class="fa fa-linkedin-square fa-3x icon" aria-hidden="true" />
                </a>
                <a class="not-active" href="https://github.com/lukegeiken4" target="_blank">
                  <i class="fa fa-github fa-3x icon" aria-hidden="true" />
                </a>
                <a class="not-active" href="https://twitter.com/lukieandtheg" target="_blank">
                  <i class="fa fa-twitter-square fa-3x icon" aria-hidden="true" />
                </a>
                <a class="not-active" href="https://www.instagram.com/luke_geiken/" target="_blank">
                  <i class="fa fa-instagram fa-3x icon" aria-hidden="true" />
                </a>
                <a class="not-active" href="mailto:luke.geiken@gmail.com?Subject=Contacting you from your website">
                  <i class="fa fa-envelope fa-3x icon" aria-hidden="true" />
                </a>
                <a class="not-active" href="Resume.pdf" target="_blank">
                  <i class="fa fa-file-pdf-o fa-3x icon" aria-hidden="true" />
                </a>
              </div>
              <a class="photo-author" href="https://unsplash.com/@paulgilmore_" target="_blank">
                <p class="photo-author">photo by: paul gilmore</p>
              </a>
            </div>
          </div>
          <div class="parallax">
            <img src="images/trees.jpg" alt="" />
          </div>
        </div>
        <div class="container">
          <div class="section">
            <div class="row">
              <h5 class="header center purple-color">past year's work experience</h5>
              <p class="center light">check out my resume to view all my work experience</p>
              <div class="col s12 m6">
                <div class="icon-block">
                  <h2 class="center purple-color">
                    <i class="fa fa-windows" aria-hidden="true" />
                  </h2>
                  <h5 class="center">microsoft software engineering intern</h5> 
                  <h5 class="center">may 2016 - present</h5>
                  <div>
                    <p class="light">currently working with the codesign team underneath the universal store. </p>
                    <p class="light">development has been  mostly  in  c#  building/ testing a new service fabric application meant to boost performance of codesign&#39;s malware scanning processes. </p>
                    <p class="light">project benchmarks include large amounts of concurrency, creating/ retrieving millions of documents per day, and required database partitioning/ performance standards needing to be hit.</p>
                  </div>
                </div>
              </div>
              <div class="col s12 m6">
                <div class="icon-block">
                  <h2 class="center purple-color">
                    <i class="fa" aria-hidden="true" />
                  </h2>
                  <h5 class="center">bunchball software engineering intern</h5>
                  <h5 class="center">may 2015 - may 2016</h5>
                  <div>
                    <p class="light">worked on a project as a full stack developer. used javascript, ruby, docker (compose and swarm), node.js and angular JS.</p>
                    <p class="light">my project was building an environment testing application that spins up docker containers for specified rspec tests.  those tests then hit a specified environment&#39;s api from multiple docker containers. it then grabs analytical data for devops to see how certain environment api&#39;s respond to request loads.</p>
                    <p class="light">This allows the devops team to find failures and recreate them while monitoring the environment. thus helping debug high level network/ architecture errors that increase performance/ reliability of company applications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="parallax-container">
          <div class="section no-pad-bot">
            <div class="container">
              <br />
              <h4 class="header center white-text">
                <i class="fa fa-chevron-left" aria-hidden="true" />
                beautiful picture to enhance user interface 
                <i class="fa fa-chevron-right" aria-hidden="true" />
              </h4>
              <a class="photo-author" href="https://unsplash.com/@matthewwiebe" target="_blank">
                <p class="photo-author">photo by: matthew wiebe</p>
              </a>
            </div>
          </div>
          <div class="parallax">
            <img src="images/flower.jpeg" alt="" />
          </div>
        </div>
        <div class="container">
          <div class="section"> 
            <div class="row">
              <div class="col s12 m6">
                <div class="icon-block">
                  <h2 class="center purple-color">
                    <i class="fa fa-laptop" aria-hidden="true" />
                  </h2>
                  <h5 class="center">technologies</h5>
                  <p>i have been able to work with many technologies in my career. some of my most noteworthy are:</p>
                  <p class="light">languages:</p>
                  <ul style="list-style-type:none">
                    <a href="https://www.javascript.com/" target="_blank">
                      <li>javascript</li>
                    </a>
                    <a href="https://java.com/en/" target="_blank">
                      <li>java</li>
                    </a>
                    <a href="https://msdn.microsoft.com/en-us/library/kx37x362.aspx" target="_blank">
                      <li>c#</li>
                    </a>
                    <a href="https://www.ruby-lang.org/en/" target="_blank">
                      <li>ruby</li>
                    </a>
                  </ul>
                  <p class="light">integration/ unit Testing:</p>
                  <ul style="list-style-type:none">
                    <a href="http://www.specflow.org/" target="_blank">
                      <li>specflow</li>
                    </a>
                    <a href="http://jasmine.github.io/" target="_blank">
                      <li>jasmine</li>
                    </a>
                    <a href="http://rspec.info/" target="_blank">
                      <li>rspec</li>
                    </a>
                  </ul>
                  <p class="light">databases</p>
                  <ul style="list-style-type:none">
                    <a href="https://azure.microsoft.com/en-us/services/documentdb/" target="_blank">
                      <li>documentdb</li>
                    </a>
                    <a href="https://www.elastic.co/" target="_blank">
                      <li>elastic</li>
                    </a>
                    <a href="https://www.mongodb.com/" target="_blank">
                      <li>mongodb</li>
                    </a>
                    <a href="https://www.mysql.com/" target="_blank">
                      <li>mysql</li>
                    </a>
                  </ul>
                  <p class="light">other tech</p>
                  <ul style="list-style-type:none">
                    <a href="https://aws.amazon.com/" target="_blank">
                      <li>aws</li>
                    </a>
                    <a href="https://azure.microsoft.com/en-us/" target="_blank">
                      <li>azure</li>
                    </a>
                    <a href="https://nodejs.org/en/" target="_blank">
                      <li>node.js</li>
                    </a>
                    <a href="https://azure.microsoft.com/en-us/services/service-fabric/" target="_blank">
                      <li>service fabric</li>
                    </a>
                    <a href="https://www.docker.com/" target="_blank">
                      <li>docker</li>
                    </a>
                    <a href="http://microservices.io/" target="_blank">
                      <li>microservices architecture</li>
                    </a>
                    <a href="https://git-scm.com/" target="_blank">
                      <li>git</li>
                    </a>
                  </ul>
                </div>
              </div>
              <div class="col s12 m6">
                <div class="icon-block">
                  <h2 class="center purple-color">
                    <i class="fa fa-user" aria-hidden="true" />
                  </h2>
                  <h5 class="center">about myself</h5>
                  <p class="light">i have spent my life up till now enjoying new experiences and new locations. i am an active traveler by feet, bike, subaru outback, and plane. enjoying new countries and continents are a thrilling experience, one that i will continue throughout the foreseeable future.</p>
                  <p class="light">along with traveling, music and art are another of my passions. writing and producing music are some of my favorite pastime activies. </p>
                  <p class="light">favorite artists: </p>
                  <ul style="list-style-type:none">
                    <a href="https://play.spotify.com/artist/1mSJCvDX0W7Dn7S9C6vmvI?play=true&utm_source=open.spotify.com&utm_medium=open" target="_blank">
                      <li>anna of the north</li>
                    </a>
                    <a href="https://play.spotify.com/artist/2xe8IXgCTpwHE3eA9hTs4n?play=true&utm_source=open.spotify.com&utm_medium=open" target="_blank">
                      <li>banks</li>
                    </a>
                    <a href="https://play.spotify.com/artist/3FMbhaYng6VoeCltbwqmtG?play=true&utm_source=open.spotify.com&utm_medium=open" target="_blank">
                      <li>brika</li>
                    </a>
                    <a href="https://play.spotify.com/artist/2Q0MyH5YMI5HPQjFjlq5g3?play=true&utm_source=open.spotify.com&utm_medium=open" target="_blank">
                      <li>chet faker</li>
                    </a>
                    <a href="https://play.spotify.com/artist/5cIc3SBFuBLVxJz58W2tU9?play=true&utm_source=open.spotify.com&utm_medium=open" target="_blank">
                      <li>oh wonder</li>
                    </a>
                    <a href="https://play.spotify.com/artist/1TtJ8j22Roc24e2Jx3OcU4?play=true&utm_source=open.spotify.com&utm_medium=open" target="_blank">
                      <li>purity ring</li>
                    </a>
                    <a href="https://play.spotify.com/artist/100sLnojEpcadRx4edEBA6?play=true&utm_source=open.spotify.com&utm_medium=open" target="_blank">
                      <li>zella day</li>
                    </a>
                  </ul>
                  <p class="light">my art includes drawing and tattooing. i am currently an amature tattooist using traditional forms of tattooing to put down my art. you are able to check our some of my work on my instagram page linked above, or:</p>
                  <a href="https://www.instagram.com/p/BFNtokQs0OP/?taken-by=luke_geiken" target="_blank">check out my favorite tattoo piece i've done</a>
                  <br />
                  <br />
                  <p class="light">want to check out my resume, check out the link above or <a href="Resume.pdf" target="_blank">click here</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="parallax-container">
          <div class="section no-pad-bot">
            <div class="container">
              <br />
              <h4 class="header center white-text">
                <i class="fa fa-chevron-left" aria-hidden="true" />
                im currently living here. its pretty cool 
                <i class="fa fa-chevron-right" aria-hidden="true" />
              </h4>
              <a class="photo-author" href="https://unsplash.com/@jswift" target="_blank">
                <p class="photo-author">photo by: josh swift</p>
              </a>
            </div>
          </div>
          <div class="parallax">
            <img src="images/seattle.jpeg" alt="" />
          </div>
        </div>
        <div class="container">
          <div class="section">
            <div class="row">
              <h5 class="header center purple-color">favorite locations in the world</h5>
              <div class="col s12 m4">
                <div class="icon-block">
                  <h2 class="center purple-color">
                    <i class="fa fa-map-marker" aria-hidden="true" />
                  </h2>
                  <h5 class="center">taksim</h5> 
                  <h5 class="center">istanbul, turkey</h5>
                  <div id="taksimMap" style="width:100%; height:300px;"></div>
                </div>
              </div>
              <div class="col s12 m4">
                <div class="icon-block">
                  <h2 class="center purple-color">
                    <i class="fa fa-map-marker" aria-hidden="true" />
                  </h2>
                  <h5 class="center">all districts</h5>
                  <h5 class="center">paris, france</h5>
                  <div id="parisMap" style="width:100%; height:300px;">
                  </div>
                </div>
              </div>
              <div class="col s12 m4">
                <div class="icon-block">
                  <h2 class="center purple-color">
                    <i class="fa fa-map-marker" aria-hidden="true" />
                  </h2>
                  <h5 class="center">gastown</h5>
                  <h5 class="center">vancouver, bc, canada </h5>
                  <div id="vancouverMap" style="width:100%; height:300px;">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    )
  }
}

export default HomePage;