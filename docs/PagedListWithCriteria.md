# PagedListWithCriteria
带有查询条件的分页列表

## 用法
### 引入组件
``` html
<paged-list-with-criteria url="/rs/sql/test.sql" pageSie="20">
  <span partial="customCriteria">
  </span>
  <span partial="customList">
  </span>
</paged-list-with-criteria>
```
`<paged-list-with-criteria>`为组件对应的html标签, 该标签需要指定两个属性
- url: 查询时对应的后台sql文件
- pageSize: 每页行数，不指定的话默认为20

### 指定查询条件片区 customCriteria
- partial="customCriteria" 不需要更改
- 示例       <div>
            地址: <input type="text" v-model="model.address" condition=" address like '%{}%'" defaultvalue="this.model.address.split('').reverse().join('')">
            </div>
            <div>
            <button v-on:click="search('param')" >查询</button>
            </div>
  其中 v-model 指定查询条件对象的字段，字段前冠以`model.`前缀，`condition`属性为查询条件对应的查询条件, `defaultvalue`为默认值，可以是字符串如'123'，或者为javascript表达式，如引用model中的数据时表达式要以`this.model.`开始

  ```html
  <button v-on:click="search('param')" >查询</button>
  ``` 请保持不变


### 指定列表行片区 customList
- partial="customList" 不需要更改，只需指定span的内容
- 示例 {{`data.`ENAME}} -- {{`data.`NAME}} -- {{`data.`F_PARENTNAME}}</span> 注意字段名前必须为`data.`
