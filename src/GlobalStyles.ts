import { createGlobalStyle } from 'styled-components'

const color = {
  primary: '#C19441',
  bg: '#fff',
  font: '#282828',
}

const GlobalStyles = createGlobalStyle`
  .lg-backdrop {
    background: #fff !important;
    &.in {
      opacity: 0.8 !important;
    }
  }
  .lg-img-wrap {
    img {
      box-shadow: #888 1px 1px 50px;
    }
  }
  .lg-toolbar {
    display: none;
  }
  .lg-actions {
    .lg-prev,
    .lg-next {
      background: transparent;
      border-radius: 50%;
      border: 1px solid ${color.primary};
      &:hover {
        color: ${color.primary};
      }
    }
  }

  body {
    font-family: Roboto, Helvetica, Arial;
    font-weight: 300;
    font-size: 13px;
    line-height: 1.7;
    letter-spacing: 1.3px;
    background: ${color.bg};
    color: ${color.font};
  }

  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    &:hover {
      color: inherit;
    }
  }

  section {
    padding: 60px 0;
    position: relative;
    h2 {
      text-align: center;
    }
    &.profile {
      background: #fff;
      height: calc(100vh - 200px);
      display: flex;
      align-items: center;
      &:after {
        content: '';
        background: #fff;
      }
    }
    &.exp {
      background: linear-gradient(#f4e8e4, #f2ded8);
      &:after {
        content: '';
        background: #f2ded8;
      }
    }
    &.gallery {
      padding: 100px 0;
      background: linear-gradient(#f2f1eb, #eae8dc);
      &:after {
        content: '';
        background: #eae8dc;
      }
    }
    &.getInTouch {
      padding: 100px 0;
      background: #0284a3;
      color: #fff;
      &:after {
        content: '';
        display: none;
      }
    }
    &:after {
      content: '';
      z-index: 1;
      position: absolute;
      width: 35px;
      height: 35px;
      background: red;
      left: 50%;
      bottom: -17.5px;
      transform: translateX(-50%) rotate(45deg);
    }
  }

  header {
    z-index: 99;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    transition: background 0.4s;

    &.hasBar {
      background: #eaeae6;
    }

    h2 {
      font-size: 14px;
      font-weight: 300;
      text-transform: uppercase;
      padding: 0 12px;
      cursor: pointer;
      margin: 0 30px;
      position: relative;
      &:hover:after {
        content: '';
        left: 0;
        right: 0;
      }
      &:after {
        content: '';
        transition: all 0.2s;
        position: absolute;
        top: 125%;
        left: 50%;
        right: 50%;
        height: 1px;
        background: #000;
      }
    }
    h1 {
      width: 60px;
      height: 60px;
      background: ${color.primary};
      color: #fff;
      border: 1px solid #fff;
      font-size: 14px;
      padding: 6px 0 0 11px;
    }
  }

  .logo {
    width: 70px;
    height: 70px;
    background: no-repeat url(./assets/logo.png);
    background-size: cover;
  }

  .w1200 {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .w1000 {
    margin: 0 auto;
    max-width: 1000px;
  }

  .w960 {
    margin: 0 auto;
    max-width: 960px;
  }

  .w800 {
    margin: 0 auto;
    max-width: 800px;
  }

  .fboxMid {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fboxBetween {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .workExperience {
    margin-top: 40px;
    padding: 20px 0;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: calc(120px + 40px);
      top: 0;
      bottom: 0;
      width: 1px;
      background: #fff;
    }
  }

  .period {
    font-size: 13px;
    background: #fff;
    border-radius: 50%;
    width: 135px;
    height: 135px;
    //border: 1px solid ${color.primary};
    position: relative;

    &:after {
      content: '';
      height: 14px;
      width: 1px;
      background: ${color.primary};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .from,
    .to {
      white-space: nowrap;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    .from {
      top: 23%;
    }
    .to {
      bottom: 23%;
    }
  }

  .periodExp {
    padding-top: 20px;
    flex: 1;
    margin-left: 40px;
    padding-left: 40px;
    h3,
    h4 {
      font-size: 14px;
    }
    h3 {
      font-weight: 500;
    }
    h4 {
      margin-top: 4px;
      font-weight: 300;
    }
    ul {
      margin-left: 20px;
      margin-top: 30px;
      float: none;
    }
    li {
      margin-bottom: 12px;
    }
  }

  .workExp {
    display: flex;
    position: relative;
    margin-bottom: 50px;
  }

  .about {
    text-align: center;
    //border: 1px solid ${color.primary};
    //padding: 40px;
    margin-top: 20px;
  }

  .aboutMe {
    width: 70%;
    line-height: 1.5;
    text-align: center;
  }

  .profile {
    margin: 0 auto;
    margin-top: 40px;
  }

  .fboxRow {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .avatar {
    margin: 20px auto;
    height: 180px;
    width: 180px;
    border-radius: 50%;
    background: url('./assets/photo.jpg') no-repeat;
    background-size: 180px;
  }

  .email {
    margin-top: 12px;
  }

  .item {
    margin-top: 20px;
    .fboxRow {
      margin-bottom: 8px;
    }
  }
  .portfolio {
    text-align: center;
  }

  .word {
    text-transform: uppercase;
    display: inline-block;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 50%;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      border-bottom: 2px solid ${color.primary};
    }
  }

  .portfolioDes {
    text-align: center;
    margin: 40px 0;
  }

  .getInTouch {
    text-align: center;
    a {
      color: #fff;
      text-transform: uppercase;
    }
    svg {
      vertical-align: -6px;
      margin-right: 12px;
    }
    .btn {
      margin-top: 40px;
    }
  }

  .btn {
    a {
      color: #fff;
      text-transform: uppercase;
    }
    text-transform: uppercase;
    display: inline-block;
    cursor: pointer;
    /* background: ${color.primary}; */
    color: #fff;
    padding: 8px 24px;
    border-radius: 30px;
    border: 1px solid #fff;
    &:hover {
      color: #fff;
    }
  }

  .vportMobile {
    display: none;
    text-align: center;
  }

  .vportDesktop {
    display: block;
  }

  .hamb {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    background: ${color.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 5%;
    top: 5px;
    s {
      &:first-child {
        margin-top: 11px;
      }
      transition: all 0.3s;
      width: 50%;
      height: 2px;
      background: #fff;
      display: block;
      margin-bottom: 5px;
    }
  }

  .hambMenu {
    text-align: center;
    list-style: none;
    margin: 0 auto;
    transition: all 0.3s;
    display: none;
    li {
      padding: 4px 0;
      cursor: pointer;
    }
  }

  @media (max-width: 701px) {
    .vportMobile {
      display: block;

      section {
        padding: 60px 5%;
        margin: 0 auto;

        &.exp {
          ul {
            text-align: left;
            margin-left: 5%;
          }
          h3,
          h4 {
            font-size: 14px;
          }
          h4,
          ul {
            margin-bottom: 20px;
          }
        }

        &.profile {
          margin-top: 38px;
          height: auto;
          flex-direction: column;
        }
        &.gallery h2 {
          margin-bottom: 40px;
        }
      }

      .period {
        margin: 0 auto;
        margin-bottom: 20px;
      }

      header {
        background: #eaeae6;
        height: auto;
        padding: 8px 5%;
        display: flex;
        min-height: 52px;

        &.-onHamb {
          .hamb {
            s {
              &:nth-child(2) {
                display: none;
              }

              &:first-child {
                transform: rotate(45deg) translate(5px, 5px);
              }

              &:last-child {
                transform: rotate(-45deg);
              }
            }
          }
          .hambMenu {
            display: block;
          }
        }
      }

      .avatar {
        margin: 15% auto 10% auto;
      }
    }

    .vportDesktop {
      display: none;
    }
  }
`

export default GlobalStyles
