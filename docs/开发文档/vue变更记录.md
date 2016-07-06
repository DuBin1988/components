# vue变更记录

- vue.common.js的 makeChildLinkFn 函数修改。7263行
原内容：
```
for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
```
新内容：
```
for (var i = 0, n = 0, l = nodes.length; n < l; n++) {
```
修改原因：  
linkFns里缓存了预先找到的节点处理函数，对节点处理应该以节点个数为准，不应当以缓存的函数个数为准。以避免节点减少时，出现bug。


false false true
