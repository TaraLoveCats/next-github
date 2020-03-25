import { Select, Spin } from 'antd'
import { useState, useCallback, useRef } from 'react';
import api from '../lib/api'
import debounce from 'lodash/debounce'

const { Option } = Select;

export default function SearchUser({ onChange, value }) {
    // {current: 0}
    const lastFetchIdRef = useRef(0);
    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState([]);

    const handleChange = (value) => {
        setOptions([]);
        setFetching(false);
        onChange(value);
    }

    const fetchUser = useCallback(debounce(value => {
        lastFetchIdRef.current += 1;
        const fetchId = lastFetchIdRef.current;
        setFetching(true);
        setOptions([]);

        api.request({
            url: `/search/users?q=${value}`
        })
        .then(resp => {
            console.log('user:', resp)
            if (fetchId !== lastFetchIdRef.current) {
                //防抖
                return;
            }
            const data = resp.data.items.map(user => ({
                text: user.login,
                value: user.login
            }))
            setFetching(false);
            setOptions(data);
        })
    }, 500), []); //输入0.5秒后再请求

    return (
        <Select 
            value={value}
            showSearch={true}
            notFoundContent={fetching ? <Spin size="small" /> : <span>Not Found</span>}
            filterOption={false}
            placeholder="search user"
            allowClear={true}
            onSearch={fetchUser}
            onChange={handleChange}
            style={{ width: 200 }}
        >
            {
                options.map(op => (
                    <Option value={op.value} key={op.value}>
                        {op.text}
                    </Option>
                ))
            }
        </Select>
    )
}