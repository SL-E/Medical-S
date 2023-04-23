import React from "react";
import "./About.css";
import touone from "../../images/touone.webp";
import {

  DesktopOutlined
} from "@ant-design/icons";

import iphone from "../../images/iphone.webp"

import { Button, Space,Select } from 'antd';

const { Option } = Select;



export default class home extends React.Component {
  render() {
    return (
      <div className="about_boxsB">
       <div className="about_boxs">
       <div className="lerel_box">Picture 1</div>
        <div className="lerel_box">Picture 2</div>
        <div className="lerel_box">Picture 3</div>
        <div className="lerel_box">Picture 4</div>
        <div className="lerel_box">Picture 5</div>
       
       </div>
       <div className="canter_nbox">

        <div className="about_select">
        <Select
    mode="multiple"
    style={{
      width: '100%',
    }}
    placeholder="select one country"
    defaultValue={['china']}
   
    optionLabelProp="label"
  >
    <Option value="china" label="China">
      <Space>
        <span role="img" aria-label="China">
          🇨🇳
        </span>
        China (中国)
      </Space>
    </Option>
    <Option value="usa" label="USA">
      <Space>
        <span role="img" aria-label="USA">
          🇺🇸
        </span>
        USA (美国)
      </Space>
    </Option>
    <Option value="japan" label="Japan">
      <Space>
        <span role="img" aria-label="Japan">
          🇯🇵
        </span>
        Japan (日本)
      </Space>
    </Option>
    <Option value="korea" label="Korea">
      <Space>
        <span role="img" aria-label="Korea">
          🇰🇷
        </span>
        Korea (韩国)
      </Space>
    </Option>
  </Select>
        </div>
        <div className="about_select">
        <Select
    mode="multiple"
    style={{
      width: '100%',
    }}
    placeholder="select one country"
    defaultValue={['china']}
   
    optionLabelProp="label"
  >
    <Option value="china" label="China">
      <Space>
        <span role="img" aria-label="China">
          🇨🇳
        </span>
        China (中国)
      </Space>
    </Option>
    <Option value="usa" label="USA">
      <Space>
        <span role="img" aria-label="USA">
          🇺🇸
        </span>
        USA (美国)
      </Space>
    </Option>
    <Option value="japan" label="Japan">
      <Space>
        <span role="img" aria-label="Japan">
          🇯🇵
        </span>
        Japan (日本)
      </Space>
    </Option>
    <Option value="korea" label="Korea">
      <Space>
        <span role="img" aria-label="Korea">
          🇰🇷
        </span>
        Korea (韩国)
      </Space>
    </Option>
  </Select>
        </div><div className="about_select">
        <Select
    mode="multiple"
    style={{
      width: '100%',
    }}
    placeholder="select one country"
    defaultValue={['china']}
   
    optionLabelProp="label"
  >
    <Option value="china" label="China">
      <Space>
        <span role="img" aria-label="China">
          🇨🇳
        </span>
        China (中国)
      </Space>
    </Option>
    <Option value="usa" label="USA">
      <Space>
        <span role="img" aria-label="USA">
          🇺🇸
        </span>
        USA (美国)
      </Space>
    </Option>
    <Option value="japan" label="Japan">
      <Space>
        <span role="img" aria-label="Japan">
          🇯🇵
        </span>
        Japan (日本)
      </Space>
    </Option>
    <Option value="korea" label="Korea">
      <Space>
        <span role="img" aria-label="Korea">
          🇰🇷
        </span>
        Korea (韩国)
      </Space>
    </Option>
  </Select>
        </div>
        <Button type="primary">search</Button>
       </div>

       <div className="about_zhu">

        <div className="about_xiang">
        <span className="about_biao">
        <DesktopOutlined />
        </span>

        <div className="about_title">WE make it easy.</div>
        <div className="about_titleone">Book in mintes</div>
        <div className="about_titleone">No waiting ,no quering</div>
        <div className="about_titleone">NZ' cheapest onling doctor conmnsuits</div>
        <div className="about_titleone">Book waiting,no queuing</div>
        </div>
        <div className="about_xiang">
        <span className="about_biao">
        <DesktopOutlined />
        </span>

        <div className="about_title">WE make it easy.</div>
        <div className="about_titleone">Book in mintes</div>
        <div className="about_titleone">No waiting ,no quering</div>
        <div className="about_titleone">NZ' cheapest onling doctor conmnsuits</div>
        <div className="about_titleone">Book waiting,no queuing</div>
        </div>
        <div className="about_xiang">
        <span className="about_biao">
        <DesktopOutlined />
        </span>

        <div className="about_title">WE make it easy.</div>
        <div className="about_titleone">Book in mintes</div>
        <div className="about_titleone">No waiting ,no quering</div>
        <div className="about_titleone">NZ' cheapest onling doctor conmnsuits</div>
        <div className="about_titleone">Book waiting,no queuing</div>
        </div>


       </div>
       <div className="about_ipone">
        <div className="about_iponeImg">

            <img src={iphone}></img>
        </div>
        <div className="about_book"><p className="aboutBook_title">
            Easy steps, 2,ins to book</p>
            
            <p className="about_asa"> 1. Answer a few sinple health querio</p>
            <p className="about_asa"> 2. Answer a few sinple health querio</p>
            <p className="about_asa"> 3. Answer a few sinple health querio</p>
            <p className="about_asa"> 4. Answer a few sinple health querio</p>
            </div>
       </div>
      </div>
    );
  }
}
