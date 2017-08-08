message MsgRow
{
    message MsgField
    {
        optional string name  = 1; /* 字段名称 */
        optional string value = 2; /* 字段值   */
        optional int32  type  = 3; /* 数据类型，1：int；2：string；3：dataTime */
    }

    repeated MsgField fields = 1;
}
    
message MsgTable
{
    required string    objName   = 1;  /* 对象名称 */
    repeated MsgRow    rows      = 2;  /* 对象字段 */
    required int32     action    = 3;  /* 1：add；2：update；3：delete 4:NONE(作为查询时返回结果里使用) */
    optional int32     allRecordCount = 4; /* 总记录条数，注意不是返回的记录条数，用于分页查询结果 */
}


var json = {"ch":[
{"names":"怡美家园","data":[2,2,1,1,1,1],"times":[10,11,13,13,21,23]},
{"names":"怡美家园","data":[2,2,1,1,1,1],"times":[10,11,13,13,21,23]}
]};

var jj = {
    "objName":"",
    "rows":[
        {"fields":
            []
        },
        {"fields":
            []
        },
        {"fields":
            []
        }
    ],
    "action":"",
    "allRecordCount":""
}
