import React from 'react';
import './yuyue.css'
import touxing from '../../images/touxing.webp'
import { Tabs } from 'antd';

import { Input, Tooltip } from 'antd';
import {
  UpCircleOutlined,DownSquareOutlined,
  UserOutlined,
  PicRightOutlined,RadiusUprightOutlined

} from '@ant-design/icons';
import { Button, Space } from 'antd';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: `User info`,

  },
  {
    key: '2',
    label: `Book info`,

  }, {
    key: '3',
    label: `Medical treatment case`,

  },

];

export default class home extends React.Component {
  render() {
    return <div >

<div className="main w">
      <h3>Select the places the you flights</h3>
      <div className="nav">
        <ul>
          <li>
            <div className="tubiao"><UpCircleOutlined /></div>
            <p>WGH-FDJ</p>
          </li>
        </ul>
        <ul>
          <li>
            <div className="tubiao"><DownSquareOutlined /></div>
            <p>WGH-FDJ</p>
          </li>
        </ul>
        <ul>
          <li>
            <div className="tubiao"><PicRightOutlined /></div>
            <p>WGH-FDJ</p>
          </li>
        </ul>
        <ul>
          <li>
            <div className="tubiao"><RadiusUprightOutlined /></div>
            <p>WGH-FDJ</p>
          </li>
        </ul>
      </div>
      <div className="banxin">
        <div className="biaoti">
          <div className="wen">
            <div className="xiaoren"></div>
            <div className="zi">
              <h4>Wcsa daihdd hdabdui hdnaoih?</h4>
              <p>ahd uiahduh hadu iahgd di ahidai hdihawd ihisafs fgsaf</p>
            </div>
          </div>
          <div className="money">
            <div className="dada">
              <h4>dgdad</h4>
              <p>da aod da wdih daio</p>
            </div>
          </div>
        </div>
        <div className="lianxi">
          <div className="lafao">
            <div className="adad">
              <p>adafaf</p>
              <h4>Pfbaufd aoifia aijwhf doiahfia afihai</h4>
              <div className="binren">
                <div className="left">
                  <div className="yanms"></div>
                  <div className="tubiao"><UserOutlined /></div>
                  <div className="xuhao">
                    <span>fdafafafaw 1</span>
                  </div>
                </div>
                <div className="right">
                  <span className="h1">azsfa </span>
                  <span className="h2">2F</span>
                </div>
              </div>
              <div className="binren">
                <div className="left">
                  <div className="yanms"></div>
                  <div className="tubiao"><UserOutlined></UserOutlined></div>
                  <div className="xuhao">
                    <span>fdafafafaw 1</span>
                  </div>
                </div>
                <div className="right">
                  <span className="h1">azsfa </span>
                  <span className="h2">2F</span>
                </div>
              </div>
            </div>
            <div className="lian">
              <div className="back1">
                <div className="boxs box3"></div>
                <div className="fafagee">afnoiasfiosa</div>
                <div className="bor">
                  <span>65</span>
                  <span className="span">daoar</span>
                </div>
              </div>
              <div className="back1">
                <div className="boxs box1"></div>
                <div className="fafagee">afnoiasfiosa</div>
                <div className="bor">
                  <span>654</span>
                  <span className="span">daoar</span>
                </div>
              </div>
              <div className="back1">
                <div className="boxs box1"></div>
                <div className="fafagee">afnoiasfiosa</div>
                <div className="bor">
                  <span>0</span>
                  <span className="span">daoar</span>
                </div>
              </div>
              <div className="back1">
                <div className="boxs box2"></div>
                <div className="fafagee">afnoiasfiosa</div>
                <div className="bor">
                  <span>3151</span>
                  <span className="span">daoar</span>
                </div>
              </div>
            </div>
          </div>
          <div className="paixu">
            <div className="li">
              <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li className="adflkm">D</li>
                <li>E</li>
                <li>F</li>
              </ul>
            </div>
            <div className="dahezi">
              <div className="boxxx"></div>
              <div className="boxxx"></div>
              <div className="boxxx"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx"></div>
              <div className="boxxx"></div>
              <div className="boxxx"></div>
              <div className="boxxx"></div>
              <div className="boxxx"></div>
              <div className="boxxx"></div>
              <div className="boxxx boxxx2"></div>
              <div className="boxxx boxxx2"></div>
              <div className="boxxx boxxx2"></div>
              <div className="boxxx boxxx2"></div>
              <div className="boxxx boxxx2"></div>
              <div className="boxxx boxxx2"></div>
              <div className="boxxx"></div>
              <div className="boxxx"></div>
              <div className="boxxx"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx"></div>
              <div className="boxxx"></div>
              <div className="boxxx"></div>
            </div>
            <div className="shuzi">
              <ul>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
              </ul>
            </div>
            <div className="dazi">
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx3"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx2"></div>
              <div className="boxxx boxxx2"></div>
              <div className="boxxx boxxx2"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx2"></div>
              <div className="boxxx boxxx2"></div>
              <div className="boxxx boxxx2"></div>
              <div className="boxxx"></div>
              <div className="boxxx boxxx2"></div>
              <div className="boxxx boxxx2"></div>
              <div className="boxxx boxxx2"></div>
              <div className="boxxx boxxx2"></div>
              <div className="boxxx boxxx2"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx boxxx1"></div>
              <div className="boxxx"></div>
              <div className="boxxx"></div>
              <div className="boxxx"></div>
            </div>
            <div className="xian"></div>
          </div>
        </div>
      </div>
    </div>


          </div>
        
    }
}