define({ "api": [
  {
    "type": "get",
    "url": "/oauth/captcha",
    "title": "获取验证码",
    "version": "1.0.0",
    "name": "captcha",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 0,\n    \"msg\": \"成功\",\n    \"sysCode\": \"zjqj\",\n    \"data\": {\n        \"verfication\": \"115a9faa-3962-4061-a64a-f48f8531d528\",\n        \"img\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAiCAIAAACV5QEtAAAMT0lEQVR42u2ceVgU5x3H8UZBfQQFFBUfEW99FG9REREUUQTxFhQPQAUeEZGHQ0RFwVvg8QQE5fHgVPF4QM62aXM0SdOkzUGSRtomaZKapGmSJmmjTz9lOptX3R1mgdWB9vsHz7I78847M5/9/b7f3Zk1+9mj+rmsX8h6TtYvZf1K0POyXpD1oqyXZP1a0MuyXpH1qqzfCHpN0G9lvS7rDVm/k/V7QW/KekvW27LekVUn6F1Z78l6X9YfBH0g656gell/lPUnWX8W9KGsj2R9LOsvgj6R9amsz2T9VdZ9QZ/L+kLWl4L+JusrWX8X9LWsb2R9K+sfgr6T9b2sH2T9U9a/BP0oy0wvVSrBel5QC4KllyqVYL0pqAXB+kCQsWB9KEgBrE8EqQHrc0EmAus7QWrA+lGQmXK5UgnWC4IUwHpZkLFgvS6oBcF6V5AasPRS1bJgfSpIDVhfCFIJ1teC1ID1vaCWAes5QS0I1iuCjAXrDUEKYL0lSA1Y7wkyEVgfCVID1meCTATWN4LUgPWDIAWwHjx4YGaswVIG60VBasB6VZCJwHpbkBqw3hekDJa0lkiVSrA+FmSUwVIGSy9VKsH6VpCmwXpJkKmdu0qw3hHUZLDYFkNJYEkLSP8+RpVKsIx17k0A6ytBpnDujYNlrHP/34yE7CwvsfU1a9Z4e3szc6bEAv+PhC0GlrGRsDnO/dlGQmZSXFzMg6qqqsOHDwcHB0dGRubk5Jw+fTomJiY5ORmkmGHTnDvPt71IqB+sNhAJDTl3NgQc165dYxymoSYSMuyNGzc4Prdv37axsRkyZEjXrl2nTp3Kru3du/fEiRNwVlFRIfVE9WDxLyOwAAewjUXCBw0ya8FIaKxzf/qR8NKlS3FxcefOndu0aROVptFIKD0oKSkJCAiYOHHi1q1bKVFeXl7Ozs4RERH+/v7l5eUpKSmrV6+mXLG8GoMllUCO84EDBzgs2dnZPNPGIqFasDQYCY1y7gzFq+wajSw8PDw6OtrJyWnGjBlJSUnSMnqdu8RWRkbGggUL/Pz8WGXFihXx8fE7duy4evXq9u3b4WnPnj2xsbH79+9nTIVWyAOw5pDeunWLOgegvr6+bm5uGDX66ZUrVyhalLE2EwlNBZbWIuH169fZi9DQ0NTU1FmzZvXs2XPw4MH5+fmcV6ySXrCkPpiZmUmzY92VK1fa2dnRB0NCQs6cOcNQQHny5EmwCAwMLCoqSkhIKCsr0wsWs2VKWVlZDOLp6ck41tbWnTp1srCwgLA5c+YcPXqUXMlaesGCV0IDz/Bqa4mEP4GlkUj42qNqqUh48ODByspKHx8f2hZdzNzcHJ+0b9++adOm5eXlGTJYbPfs2bMXL16kLM2cOZPOxeZ4ifZ3/vx5oExPT4cMcOEB6/LqY1SBC3/pvPQ7FxeX7t27s92OHTuCde/evV1dXSl1AwYMIBnQIg21Qo7YsmXL4G/Xrl1AJtUtjUfCpoPVuiLhtm3bqD2jR4/28PDo1atXhw4daGpdunShkjGmIbBKS0sLCgrCwsLYI+oW7a+mpoaXmCd/L1++jMcCF0w9XZLd15l38bMGjD+FbdKkSVZWVsOGDRs+fPj06dNpiAMHDsTwwRali+Oj4LFgjvHBsV27dkyJQsu+sErTwDLWuTctEuoBq+1FwrS0NMyQpaUlHRAD7uDgQAGgc4EXr27evLmurs5QK7xz5w4j04lwVIwsfS7KPBcvXszzgwYNAhRmNWLECMnpP9kHKZM8w2Le3t4AQQ/FUfE8k4HUHj162NvbM6ZyJAS+dg1yd3dno7a2trwreJ9gGVlXg5FQCazWHgl5wHaZPCeVljdu3LgxY8bQ+DidtBVOD82I+XCqGv2WkM3hpTiF0lc67D5GjebICEFBQTik2tpavc6d1Xfv3s1oJFCqI/9WV1czAkADHGUMm3Xo0KH6+nqFSMjCZmZmUNW+fXupbknijeHo6JiYmMiwXz6qZx4JVYHVSiMhk8TB4G86d+48cuRI3NLy5cuJZpzgrg2iekm+XuWXOTyWPgkDJgoYmNLa6HSbNm0y9LE7j5kt3LCW+HEDk6EVduvWbfLkyawo5UFDkZCzA1gUrT59+owaNYrQQIDgjSGhRsGj1dITn1okVOPcjQPLWOf+bCMh9oi6gsWGqrlz57JFGIIMfDfniTKG8cInqf8yh+cBMSoqimyIT8Ie0RCZHqZH5beETDIjI2P9+vU2NjZQNXXqVKAEO46tAliFhYVMmKZJocXqMRNA5Fixa4AFcG5ubhwHTUXC/4KlwUhorHN/Eqzjx4+TwnhD0y849HQrhgIsOhdNZNGiRUTFtWvXqgRLslAEQzoghXDLli0LFy6UPsHnVZXfEtKIAVoqNsyKkklDpHodOXJEASwWACzK1YYNG9gLXSQkNIwfPx62GDM3N/cZfpnTYmC1ikhIOBftCO9sLDYRb+PGjTzD2x33ExgYqPL6PjYRHx/fr18/6g0lZMmSJbDFqaUuqr++DztFrcKZAQrhlB49YcIEil9MTIwCWLwBJLAosRwN3QcNlE9Qw3XxEqxrKhI+DpapI2FznLtRkbCmpmbnzp28lUlPnD+o4p0tEWbWIN7rRMXIyEgWpowpg8UWjx07xvI0I0odf3FX0dHRHAoOi/rLsOjChFCIJxjGxsY6OzsDFvFQAktvJOQxQDNzWmF4eDiz1YFFQ9yxY0enBsXFxWkqEhoEq7VHwoqKCvrUqVOn9uzZExwcTNR3cHCwsrLC2cAZYLVvEFHxzJkzTEwBLP69desWFY4a4+npSZTD+Pv7+5PvmDNbVAaLZ3R48SSjwTHLFxcXh4aGMiVG27t3LzuoNxLW1dVRqJgzbwk/Pz+Omw4sWOSljg1ihKY5dxNFwocPH5q1yUjICLwqjSPNirZFwaDvUKvoHbBFqeCUUD+Yj0IkZLScnBwMOyAOHTrU3d0dyDBY1C2gvHDhAsfNkHPnyJSXlxcVFVGieMwzugtmGBniGZOEQayrqqrS2wcrKyspVH379mXCzIG0oQOLEejLAEdVxjhqKhIaAVbrioR6L8Nieelr44SEBGtr6+XLl2PqcTDsLzPR69xxYFlZWeRKnV2jFZLsyIOrVq2i5DAavFJX9IKVkpKC9Q4KCqJeYrDYL6YBVewFzXrp0qWAlZSURFzlcOkF6+LFi5SlUaNGARZ1i+jAijxP/aOOAjcj2NraZmdnayoS/gesNhkJDV3fByVQhe+maOFLeEC1YH+l60KfLFc8v3379rFjx4IU5c3JyYlM5+HhQekiIVIFIyIiqFu6ovVYJMSHSZfoUHLYHBCzMIeLtdg0/ZQihHtjN+vr6/WCxYSjoqLIj5J/Nzc3x97BIuNQNYkCTAzaysrKNBUJHwHLWOfe6i4cZb8YcOXKlTTBefPmYYoZlj0yZLAYmWpEOaH9eXl5cYggCfednJzMed23bx89EXRKSkqYlV6DxQFho+vWraPmwQGxFLceEBAAl4MHD6bg+fr6UmwoP4a+zCktLYVsvCBg4bFcXV2xiZJBBDL6oIWFBRGEHddUJGwWWJqNhIbAYneYIaVi48aNhYWFeBdKiMJnDew1ZaZ///44MxbmAWSwIiebnE/Cp0+REmpra6krN27c0BsJ7927R02aPXs2q8MBBQas8ewUm/T0dHyIdF2DIbCosmFhYfb29oAFyizv4+NjaWkpfXsIZPPnz6cnmvTLnCZEQv1gtYELR/Xe8sXzDHXnzh0CI8/jl+/evasAFpvIy8tjkkyJssSeSvcSsiKeXfdBAwNyaqULqp4EiwWYGEXOxcWFumVnZwdhtDP6I4caD9fohaMhISHSRyQ4tvv37zMZcJ8yZQq401KZGGhqLRI2Apapr+8z9YWjhu6hYEnpiuQnP8HSgcWUqqur09LSAIKTp+aeeoUPsdgp4MvMzMQwpaam5ubmUufwcAqXYemuGsW8U5z69etHUOBf8qB0SRaTlz6k0Nq3hEaApcFIaKxzV3kv4WNf5ty8eZP5qPyxhkbvfpYIY1aspf6Wr8TEROl7Gx6ws1q4cLRR5240WBr8FRAT3UvYnF8BUXkvocpbvgoKCuiejo6OsbGxHHZN3fLVOFgajIQa+RWQp/DzMsq3fLEA49CX8/Pz2XGNXzjaXLBaXSRsFb8ConwvoWSwnvItX02LhHrAMnUk1OCvgDQBLFP/CojKewmbc8uXSSMh+jd24Kpqnc/+DQAAAABJRU5ErkJggg==\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-authorization-service/src/main/java/com/hzsun/ccd/authorization/rest/Oauth2Controller.java",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/decide",
    "title": "权限验证",
    "version": "1.0.0",
    "name": "decide",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>访问的url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "method",
            "description": "<p>访问的method</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-authentication-service/src/main/java/com/hzsun/ccd/authentication/rest/AuthenticationController.java",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/authorities",
    "title": "新增权限",
    "version": "1.0.0",
    "name": "addAuthority",
    "group": "Authority",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "parentId",
            "description": "<p>上级权限id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "productId",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authorityName",
            "description": "<p>权限名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "authorityType",
            "description": "<p>权限类型(0：子系统，1：目录，2：菜单，3：按钮，4：链接)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authorityCode",
            "description": "<p>权限标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderNum",
            "description": "<p>排序号</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/AuthorityController.java",
    "groupTitle": "Authority"
  },
  {
    "type": "delete",
    "url": "/authorities/{id}",
    "title": "删除权限",
    "version": "1.0.0",
    "name": "deleteAuthority",
    "group": "Authority",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>权限id</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/AuthorityController.java",
    "groupTitle": "Authority"
  },
  {
    "type": "get",
    "url": "/authorities/{id}",
    "title": "获取部门详情",
    "version": "1.0.0",
    "name": "getAuthority",
    "group": "Authority",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>权限id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.id",
            "description": "<p>权限id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.parentId",
            "description": "<p>上级权限id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.parentName",
            "description": "<p>上线权限名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.authorityName",
            "description": "<p>权限名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.productId",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.authorityCode",
            "description": "<p>权限标识</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.authorityType",
            "description": "<p>权限类型(0：子系统，1：目录，2：菜单，3：按钮，4：链接)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.orderNum",
            "description": "<p>排序号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":{\n         \"id\":1,\n         \"parentId\":0\n         \"parentName\":\"权限管理\",\n         \"authorityName\":\"新增\",\n         \"authorityCode\":\"create\",\n         \"authorityType\":3,\n         \"productId\":0,\n         \"orderNum\":1\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/AuthorityController.java",
    "groupTitle": "Authority"
  },
  {
    "type": "get",
    "url": "/authorities",
    "title": "获取部门列表",
    "version": "1.0.0",
    "name": "getAuthorityList",
    "group": "Authority",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "productId",
            "description": "<p>所属产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authorityName",
            "description": "<p>权限名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>当前页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>查询条数</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.content",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.content.id",
            "description": "<p>权限id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.authorityName",
            "description": "<p>权限名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.authorityCode",
            "description": "<p>权限标识</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.content.authorityType",
            "description": "<p>权限类型(0：子系统，1：目录，2：菜单，3：按钮，4：链接)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.createTime",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.content.subAuthorities",
            "description": "<p>下级部门</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.total",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":{\n         \"content\":[{\n             \"id\":1,\n             \"authorityName\":\"查询\",\n             \"authorityCode\":\"select\",\n             \"authorityType\":\"按钮\",\n             \"createTime\":\"2020-04-08 15:30:30\",\n             \"subAuthorities\":[{\n                 \"id\":1,\n                 \"authorityName\":\"查询\",\n                 \"authorityCode\":\"select\",\n                 \"authorityType\":\"按钮\",\n                 \"createTime\":\"2020-04-08 15:30:30\",\n                 \"subAuthorities\":[]\n             }]\n             },\n             {\n             \"id\":1,\n             \"authorityName\":\"查询\",\n             \"authorityCode\":\"select\",\n             \"authorityType\":\"按钮\",\n             \"createTime\":\"2020-04-08 15:30:30\",\n             \"subAuthorities\":[{\n                  \"id\":1,\n                  \"authorityName\":\"查询\",\n                  \"authorityCode\":\"select\",\n                  \"authorityType\":\"按钮\",\n                  \"createTime\":\"2020-04-08 15:30:30\",\n                  \"subAuthorities\":[]\n                  }]\n              }\n         ],\n         \"total\":20\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/AuthorityController.java",
    "groupTitle": "Authority"
  },
  {
    "type": "put",
    "url": "/authorities",
    "title": "修改权限",
    "version": "1.0.0",
    "name": "updateAuthority",
    "group": "Authority",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>权限id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "parentId",
            "description": "<p>上级权限id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "productId",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authorityName",
            "description": "<p>权限名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "authorityType",
            "description": "<p>权限类型(0：子系统，1：目录，2：菜单，3：按钮，4：链接)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authorityCode",
            "description": "<p>权限标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderNum",
            "description": "<p>排序号</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/AuthorityController.java",
    "groupTitle": "Authority"
  },
  {
    "type": "get",
    "url": "/auth/permission",
    "title": "权限验证",
    "version": "1.0.0",
    "name": "permission",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productCode",
            "description": "<p>访问的产品编码</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":[\n        \"testMenu\",\n        \"testButton2\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-authentication-service/src/main/java/com/hzsun/ccd/authentication/rest/AuthenticationController.java",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/oauth/result",
    "title": "令牌校验",
    "version": "1.0.0",
    "name": "result",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 0,\n    \"msg\": \"成功\",\n    \"sysCode\": \"zjqjjq\",\n    \"data\": {\n         true\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-authorization-service/src/main/java/com/hzsun/ccd/authorization/rest/Oauth2Controller.java",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/oauth/token",
    "title": "身份认证",
    "version": "1.0.0",
    "name": "token",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>客户端id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_secret",
            "description": "<p>客户端密钥</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "scope",
            "description": "<p>权限范围</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "grant_type",
            "description": "<p>认证类型（目前只使用两种[password:密码模式(将用户名,密码传过去,直接获取token);refresh_token: 刷新access_token]）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "verfication",
            "description": "<p>验证码ID（调用获取验证码接口时获取，不传不验证验证码）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>验证码（根据验证码图片输入的验证码）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 0,\n    \"msg\": \"成功\",\n    \"sysCode\": \"zjqj\",\n    \"data\": {\n        \"access_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidWlhcyJdLCJ1c2VyX25hbWUiOiJ0ZXN0MDAxIiwic2NvcGUiOlsicmVhZCJdLCJwcm9kdWN0Q29kZXMiOlsiVGVzdHByb2R1Y3QyIl0sImV4cCI6MTU4OTE4ODY2MiwidXNlck5hbWUiOiLlkJXmma4xIiwianRpIjoiN2NkYTNlMzQtNTY2Mi00MTUwLTk1MmUtYjM2Yjc1NDM2Nzg3IiwiY2xpZW50X2lkIjoidGVzdF9jbGllbnQifQ.UfPHKNa0BawkcgXgXw3VLUnLPP13SpDv8uZpU-3AxqU\",\n        \"refresh_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidWlhcyJdLCJ1c2VyX25hbWUiOiJ0ZXN0MDAxIiwic2NvcGUiOlsicmVhZCJdLCJhdGkiOiI3Y2RhM2UzNC01NjYyLTQxNTAtOTUyZS1iMzZiNzU0MzY3ODciLCJwcm9kdWN0Q29kZXMiOlsiVGVzdHByb2R1Y3QyIl0sImV4cCI6MTU4OTI4OTQ2MiwidXNlck5hbWUiOiLlkJXmma4xIiwianRpIjoiY2I4ODcyMDYtODM4ZS00OGRhLTlkYzktZGUxYjM4NTdkYzU4IiwiY2xpZW50X2lkIjoidGVzdF9jbGllbnQifQ.TsvalRBDVOExvmncgJVZomHODA4fdbbReymQzFaFzSU\",\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-authorization-service/src/main/java/com/hzsun/ccd/authorization/rest/Oauth2Controller.java",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/companies",
    "title": "新增单位(申请接入)",
    "version": "1.0.0",
    "name": "addCompany",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>单位名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "companyType",
            "description": "<p>接入单位类型（0:学校，1:公司）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "companyCode",
            "description": "<p>单位code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "companyShortName",
            "description": "<p>单位简称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "englishName",
            "description": "<p>英文简称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "companyLogo",
            "description": "<p>单位logo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "addType",
            "description": "<p>新增类型（0：后台新增，1：申请接入）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactPhone",
            "description": "<p>联系人电话</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": true,
            "field": "validTime",
            "description": "<p>有效时长（单位：秒。不填默认7200s）</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": true,
            "field": "refreshTime",
            "description": "<p>刷新有效时长（单位：秒。不填默认7200s）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactEmail",
            "description": "<p>联系人邮箱</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/CompanyController.java",
    "groupTitle": "Company"
  },
  {
    "type": "delete",
    "url": "/companies/{id}",
    "title": "删除单位",
    "version": "1.0.0",
    "name": "deleteCompany",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>单位id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/CompanyController.java",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/companies/{id}",
    "title": "获取单位详情",
    "version": "1.0.0",
    "name": "getCompany",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>单位id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.id",
            "description": "<p>单位id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.companyName",
            "description": "<p>单位名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.companyCode",
            "description": "<p>单位code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.companyShortName",
            "description": "<p>单位简称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.englishName",
            "description": "<p>英文简称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.contact",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.contactPhone",
            "description": "<p>联系人电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.createTime",
            "description": "<p>创建时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":{\n         \"id\":1,\n         \"companyCode\":\"hzsun\",\n         \"companyName\":\"浙江正元智慧科技股份有限公司\",\n         \"companyShortName\":\"正元智慧\",\n         \"englishName\":\"hzsun\",\n         \"productNumber\":20,\n         \"userNumber\":5000,\n         \"contact\":\"XXX\",\n         \"contactPhone\":\"13888888888\",\n         \"createTime\":\"2020-04-08 15:30:30\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/CompanyController.java",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/companies",
    "title": "获取单位列表",
    "version": "1.0.0",
    "name": "getCompanyList",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>单位名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "companyStatus",
            "description": "<p>单位状态</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>当前页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>查询条数</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.content",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.content.id",
            "description": "<p>单位id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.companyName",
            "description": "<p>单位名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.companyCode",
            "description": "<p>单位code</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.content.companyStatus",
            "description": "<p>单位状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.companyShortName",
            "description": "<p>单位简称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.englishName",
            "description": "<p>英文简称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.contact",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.contactPhone",
            "description": "<p>联系人电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.createTime",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.total",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":[{\n         \"id\":1,\n         \"companyCode\":\"hzsun\",\n         \"companyName\":\"浙江正元智慧科技股份有限公司\",\n         \"companyShortName\":\"正元智慧\",\n         \"companyStatus\":0,\n         \"englishName\":\"hzsun\",\n         \"productNumber\":20,\n         \"userNumber\":5000,\n         \"contact\":\"XXX\",\n         \"contactPhone\":\"13888888888\",\n         \"createTime\":\"2020-04-08 15:30:30\"\n     },\n     {\n         \"id\":2,\n         \"companyCode\":\"hzsun\",\n         \"companyName\":\"浙江正元智慧科技股份有限公司\",\n         \"companyShortName\":\"正元智慧\",\n         \"companyStatus\":0,\n         \"englishName\":\"hzsun\",\n         \"productNumber\":20,\n         \"userNumber\":5000,\n         \"contact\":\"XXX\",\n         \"contactPhone\":\"13888888888\",\n         \"createTime\":\"2020-04-08 15:30:30\"\n     }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/CompanyController.java",
    "groupTitle": "Company"
  },
  {
    "type": "put",
    "url": "/companies",
    "title": "修改单位",
    "version": "1.0.0",
    "name": "updateCompany",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>单位id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>单位名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "companyType",
            "description": "<p>接入单位类型（0:学校，1:公司）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyCode",
            "description": "<p>单位code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyShortName",
            "description": "<p>单位简称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "englishName",
            "description": "<p>英文简称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "companyLogo",
            "description": "<p>单位logo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactPhone",
            "description": "<p>联系人电话</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": true,
            "field": "validTime",
            "description": "<p>有效时长（单位：秒。不填默认7200s）</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": true,
            "field": "refreshTime",
            "description": "<p>刷新有效时长（单位：秒。不填默认7200s）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactEmail",
            "description": "<p>联系人邮箱</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/CompanyController.java",
    "groupTitle": "Company"
  },
  {
    "type": "put",
    "url": "/companies",
    "title": "更新单位状态",
    "version": "1.0.0",
    "name": "updateCompanyStatus",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>单位id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "companyStatus",
            "description": "<p>单位状态(-1:删除，0：启用，1：停用，2：审核中,3：审核未通过)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/CompanyController.java",
    "groupTitle": "Company"
  },
  {
    "type": "post",
    "url": "/departments",
    "title": "新增部门",
    "version": "1.0.0",
    "name": "addDepartment",
    "group": "Department",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "departmentName",
            "description": "<p>部门名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "parentId",
            "description": "<p>上级部门id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "orderNum",
            "description": "<p>显示排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "companyId",
            "description": "<p>所属单位</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/DepartmentController.java",
    "groupTitle": "Department"
  },
  {
    "type": "delete",
    "url": "/departments/{id}",
    "title": "删除部门",
    "version": "1.0.0",
    "name": "deleteDepartment",
    "group": "Department",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>部门id</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/DepartmentController.java",
    "groupTitle": "Department"
  },
  {
    "type": "get",
    "url": "/departments/{id}",
    "title": "获取部门详情",
    "version": "1.0.0",
    "name": "getDepartment",
    "group": "Department",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>部门id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.id",
            "description": "<p>部门id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.department",
            "description": "<p>部门名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.departmentStatus",
            "description": "<p>部门状态(0：启用，1：停用)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.createTime",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.parentId",
            "description": "<p>上级部门id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.parentName",
            "description": "<p>上级部门名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.orderNum",
            "description": "<p>排序号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":{\n         \"id\":1,\n         \"departmentName\":\"财务部\",\n         \"departmentStatus\":0,\n         \"createTime\":\"2020-04-08 15:30:30\",\n         \"parentId\":0,\n         \"parentName\":\"正元智慧\",\n         \"orderNum\":1\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/DepartmentController.java",
    "groupTitle": "Department"
  },
  {
    "type": "get",
    "url": "/departments",
    "title": "获取部门列表",
    "version": "1.0.0",
    "name": "getDepartmentList",
    "group": "Department",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "companyId",
            "description": "<p>所属单位id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "departmentName",
            "description": "<p>部门名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>当前页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>查询条数</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.content",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.content.id",
            "description": "<p>部门id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.departmentName",
            "description": "<p>部门名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.content.departmentStatus",
            "description": "<p>部门状态(0：启用，1：停用)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.createTime",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.content.subDepartment",
            "description": "<p>下级部门</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.total",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":{\n         \"content\":[{\n             \"id\":1,\n             \"departmentName\":\"财务部\",\n             \"departmentStatus\":0,\n             \"createTime\":\"2020-04-08 15:30:30\",\n             \"subDepartment\":[{\n                 \"id\":2,\n                 \"departmentName\":\"财务部\",\n                 \"departmentStatus\":0,\n                 \"createTime\":\"2020-04-08 15:30:30\",\n                 \"subDepartment\":[]\n             }]\n             },\n             {\n             \"id\":2,\n             \"departmentName\":\"财务部\",\n             \"departmentStatus\":0,\n             \"createTime\":\"2020-04-08 15:30:30\",\n             \"subDepartment\":[{\n                 \"id\":2,\n                 \"departmentName\":\"财务部\",\n                 \"departmentStatus\":0,\n                 \"createTime\":\"2020-04-08 15:30:30\",\n                 \"subDepartment\":[]\n             }]\n             }\n         ],\n         \"total\":20\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/DepartmentController.java",
    "groupTitle": "Department"
  },
  {
    "type": "put",
    "url": "/departments",
    "title": "修改部门",
    "version": "1.0.0",
    "name": "updateDepartment",
    "group": "Department",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "departmentName",
            "description": "<p>部门名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "parentId",
            "description": "<p>上级部门id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "orderNum",
            "description": "<p>显示排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "departmentStatus",
            "description": "<p>部门状态</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/DepartmentController.java",
    "groupTitle": "Department"
  },
  {
    "type": "put",
    "url": "/departments/{id}/{departmentStatus}",
    "title": "修改部门状态",
    "version": "1.0.0",
    "name": "updateDepartmentStatus",
    "group": "Department",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>部门id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "departmentStatus",
            "description": "<p>部门状态（0：启用，1：停用）</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/DepartmentController.java",
    "groupTitle": "Department"
  },
  {
    "type": "delete",
    "url": "/optLogs",
    "title": "批量清除操作日志",
    "version": "1.0.0",
    "name": "deleteOptLogs",
    "group": "OptLog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ids",
            "description": "<p>单位id的组合，多个使用逗号隔开</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>返回值</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": "<p>返回系统码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回的信息，用于错误信息返回</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回json数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"zjjqrz\",\n     \"msg\":\"删除成功\",\n     \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-log-service/src/main/java/com/hzsun/ccd/log/controller/OptLogController.java",
    "groupTitle": "OptLog"
  },
  {
    "type": "get",
    "url": "/optLogs",
    "title": "获取操作日志列表",
    "version": "1.0.0",
    "name": "getOptLogs",
    "group": "OptLog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>跳转页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>每页条数（-1将返回全部）</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "companyId",
            "description": "<p>单位id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>操作员id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "optType",
            "description": "<p>操作类型 create：新增 delete：删除 retrieve：查询 update：修改</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "optStatus",
            "description": "<p>操作结果 success：成功 fail：失败</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>结束时间</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>返回值</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": "<p>返回系统码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回的信息，用于错误信息返回</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回json数据</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.total",
            "description": "<p>总共多少条记录</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.content",
            "description": "<p>操作日志列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.content.id",
            "description": "<p>操作记录id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.sysModule",
            "description": "<p>系统模块</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.optType",
            "description": "<p>操作类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.optInfo",
            "description": "<p>操作详情</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.ip",
            "description": "<p>操作ip（操作员ip）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.operator",
            "description": "<p>操作员名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.companyName",
            "description": "<p>单位名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.optStatus",
            "description": "<p>操作状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.createTime",
            "description": "<p>操作时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.companyId",
            "description": "<p>单位id (不返回)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.url",
            "description": "<p>请求url （后续支持）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.method",
            "description": "<p>请求方式（后续支持）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.reqParameters",
            "description": "<p>请求参数（后续支持）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.retParameters",
            "description": "<p>返回参数（后续支持）</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.content.depId",
            "description": "<p>部门id（后续支持）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.depName",
            "description": "<p>部门名称（后续支持）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"zjjqrz\",\n     \"msg\":\"\",\n     \"data\":{\n         \"total\": 500\n         \"records\": [{\n             \"id\":1,\n             \"sysModule\":\"单位管理\",\n             \"optType\":\"新增\",\n             \"optInfo\":\"新增单位xxx\",\n             \"ip\":\"172.16.4.106\",\n             \"companyName\":\"正元智慧\",\n             \"optStatus\":\"失败\",\n             \"operator\":\"管理员\",\n             \"createTime\":\"2020-04-08 15:30:30\"\n         },\n         {\n             \"id\":2,\n             \"sysModule\":\"单位管理\",\n             \"optType\":\"新增\",\n             \"optInfo\":\"新增单位xxx\",\n             \"ip\":\"172.16.4.107\",\n             \"companyName\":\"正元智慧\",\n             \"optStatus\":\"成功\",\n             \"operator\":\"管理员\",\n             \"createTime\":\"2020-04-08 15:30:30\"\n         }]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-log-service/src/main/java/com/hzsun/ccd/log/controller/OptLogController.java",
    "groupTitle": "OptLog"
  },
  {
    "type": "post",
    "url": "/products",
    "title": "新增产品",
    "version": "1.0.0",
    "name": "addProduct",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "companyId",
            "description": "<p>所属单位</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productCode",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productUrl",
            "description": "<p>产品链接</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/ProductController.java",
    "groupTitle": "Product"
  },
  {
    "type": "delete",
    "url": "/products/{id}",
    "title": "删除产品",
    "version": "1.0.0",
    "name": "deleteProduct",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>产品id</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/ProductController.java",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/products/{id}",
    "title": "获取产品详情",
    "version": "1.0.0",
    "name": "getProduct",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>产品id</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.id",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.productCode",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.companyId",
            "description": "<p>所属单位id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.companyName",
            "description": "<p>所属单位名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.productStatus",
            "description": "<p>产品状态(0：启用，1：停用)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.productUrl",
            "description": "<p>产品链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.createTime",
            "description": "<p>创建时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/ProductController.java",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/products",
    "title": "获取产品列表",
    "version": "1.0.0",
    "name": "getProductList",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "companyId",
            "description": "<p>所属单位id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productStatus",
            "description": "<p>产品状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>当前页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>查询条数</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.content",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.content.id",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.productName",
            "description": "<p>部门名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.productCode",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.content.productStatus",
            "description": "<p>产品状态(0：启用，1：停用)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.createTime",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.total",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":{\n         \"content\":[{\n             \"id\":1,\n             \"productName\":\"统一身份认证系统\",\n             \"productCode\":\"ui_auth\",\n             \"departmentStatus\":0,\n             \"createTime\":\"2020-04-08 15:30:30\"\n             },\n             {\n             \"id\":2,\n             \"productName\":\"统一身份认证系统\",\n             \"productCode\":\"ui_auth\",\n             \"departmentStatus\":0,\n             \"createTime\":\"2020-04-08 15:30:30\"\n             }\n         ],\n         \"total\":20\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/ProductController.java",
    "groupTitle": "Product"
  },
  {
    "type": "put",
    "url": "/products",
    "title": "更新产品",
    "version": "1.0.0",
    "name": "updateProduct",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "companyId",
            "description": "<p>所属单位</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productCode",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "productUrl",
            "description": "<p>产品链接</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/ProductController.java",
    "groupTitle": "Product"
  },
  {
    "type": "put",
    "url": "/products/{id}/{productStatus}",
    "title": "修改部门状态",
    "version": "1.0.0",
    "name": "updateProductStatus",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "productStatus",
            "description": "<p>产品状态（0：启用，1：停用）</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/ProductController.java",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/roles",
    "title": "新增角色",
    "version": "1.0.0",
    "name": "addRole",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "departmenId",
            "description": "<p>所属部门</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "companyId",
            "description": "<p>所属单位</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "roleCode",
            "description": "<p>角色标识</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "authorities",
            "description": "<p>权限集合</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "authorities.id",
            "description": "<p>权限id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authorities.expiryDate",
            "description": "<p>权限有限时间</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/RoleController.java",
    "groupTitle": "Role"
  },
  {
    "type": "delete",
    "url": "/roles/{id}",
    "title": "删除角色",
    "version": "1.0.0",
    "name": "deleteRole",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>部门id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/RoleController.java",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "/roles/{id}",
    "title": "获取角色详情",
    "version": "1.0.0",
    "name": "getRole",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>角色id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.id",
            "description": "<p>角色id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.roleName",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.roleCode",
            "description": "<p>角色code(0：启用，1：停用)</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.roleStatus",
            "description": "<p>角色状态(0：启用，1：停用)</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.departmentId",
            "description": "<p>所属部门id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.departmentName",
            "description": "<p>所属部门名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.companyId",
            "description": "<p>所属单位id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.companyName",
            "description": "<p>所属单位名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.createTime",
            "description": "<p>创建时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":{\n         \"id\":1,\n         \"roleName\":\"管理员\",\n         \"roleStatus\":0,\n         \"roleCode\":\"admin\",\n         \"createTime\":\"2020-04-08 15:30:30\",\n         \"companyId\":0,\n         \"companyName\":\"正元智慧\",\n         \"departmentId\":1,\n         \"departmentName\":\"财务部\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/RoleController.java",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "/roles",
    "title": "获取角色列表",
    "version": "1.0.0",
    "name": "getRoleList",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "companyId",
            "description": "<p>所属单位id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "departmentId",
            "description": "<p>所属部门id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>当前页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>查询条数</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.content",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.content.id",
            "description": "<p>角色id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.roleName",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.content.roleCode",
            "description": "<p>角色code(0：启用，1：停用)</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.content.roleStatus",
            "description": "<p>角色状态(0：启用，1：停用)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.createTime",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.total",
            "description": "<p>总条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":{\n         \"content\":[{\n             \"id\":1,\n             \"roleName\":\"管理员\",\n             \"roleStatus\":0,\n             \"createTime\":\"2020-04-08 15:30:30\",\n             \"roleCode\":\"admin\"\n             },\n             {\n             \"id\":2,\n             \"roleName\":\"财务部\",\n             \"roleStatus\":0,\n             \"createTime\":\"2020-04-08 15:30:30\",\n             \"roleCode\":\"manager\"\n             }\n         ],\n         \"total\":20\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/RoleController.java",
    "groupTitle": "Role"
  },
  {
    "type": "put",
    "url": "/roles",
    "title": "修改角色",
    "version": "1.0.0",
    "name": "updateRole",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>角色id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "departmenId",
            "description": "<p>所属部门</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "companyId",
            "description": "<p>所属单位</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "roleCode",
            "description": "<p>角色标识</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "authorities",
            "description": "<p>权限集合</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "authorities.id",
            "description": "<p>权限id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authorities.expiryDate",
            "description": "<p>权限有限时间</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/RoleController.java",
    "groupTitle": "Role"
  },
  {
    "type": "put",
    "url": "/roles/{id}/{roleStatus}",
    "title": "修改角色状态",
    "version": "1.0.0",
    "name": "updateRoleStatus",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>角色id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "roleStatus",
            "description": "<p>角色状态</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/RoleController.java",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "/sysLogs",
    "title": "获取系统日志列表",
    "version": "1.0.0",
    "name": "getSysLogs",
    "group": "SysLog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>跳转页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>每页条数 （-1将返回全部）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logType",
            "description": "<p>操作类型 server：系统服务 interface：接口调用</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>结束时间</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>返回值</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": "<p>返回系统码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回的信息，用于错误信息返回</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回json数据</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.currentPage",
            "description": "<p>当前第几页</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.pageLimit",
            "description": "<p>单页显示条数</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.totalPage",
            "description": "<p>总共多少页</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.total",
            "description": "<p>总共多少条记录</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.content",
            "description": "<p>系统日志列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.content.id",
            "description": "<p>操作记录id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.logType",
            "description": "<p>日志类型（service服务，interface接口）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.interfaceName",
            "description": "<p>接口名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.exceptionType",
            "description": "<p>异常类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.ip",
            "description": "<p>报出日志的服务器ip</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.causes",
            "description": "<p>异常原因</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.createTime",
            "description": "<p>操作时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"zjjqrz\",\n     \"msg\":\"\",\n     \"data\":{\n         \"total\": 500\n         \"records\": [{\n             \"id\":1,\n             \"logType\":\"服务异常\",\n             \"interfaceName\":\"获取用户\",\n             \"exceptionType\":\"NullException\",\n             \"ip\":\"172.16.4.106\",\n             \"causes\":\"空指针异常\",\n             \"createTime\":\"2020-04-08 15:30:30\"\n         },\n         {\n             \"id\":2,\n             \"logType\":\"服务异常\",\n             \"interfaceName\":\"获取用户\",\n             \"exceptionType\":\"NullException\",\n             \"ip\":\"172.16.4.106\",\n             \"causes\":\"空指针异常\",\n             \"createTime\":\"2020-04-08 15:30:30\"\n         }]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-log-service/src/main/java/com/hzsun/ccd/log/controller/SysLogController.java",
    "groupTitle": "SysLog"
  },
  {
    "type": "get",
    "url": "/tree/authorities",
    "title": "权限树状图",
    "version": "1.0.0",
    "name": "treeAuthority",
    "group": "Tree",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.parentId",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "data.children",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":[\n        {\n            \"id\": 1,\n            \"parentId\": 0,\n            \"name\": \"权限控制\",\n            \"children\": [\n                {\n                    \"id\": 2,\n                    \"parentId\": 1,\n                    \"name\": \"菜单控制\",\n                    \"children\": []\n                }\n            ]\n        },\n        {\n            \"id\": 3,\n            \"parentId\": 0,\n            \"name\": \"测试菜单\",\n            \"children\": [\n                {\n                    \"id\": 4,\n                    \"parentId\": 3,\n                    \"name\": \"测试按钮2\",\n                    \"children\": []\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/TreeController.java",
    "groupTitle": "Tree"
  },
  {
    "type": "get",
    "url": "/tree/departments",
    "title": "部门树状图",
    "version": "1.0.0",
    "name": "treeDepartments",
    "group": "Tree",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.parentId",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "data.children",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":[\n        {\n            \"id\": 7,\n            \"parentId\": 0,\n            \"name\": \"管理部门\",\n            \"children\": [\n                {\n                    \"id\": 17,\n                    \"parentId\": 7,\n                    \"name\": \"管理部门\",\n                    \"children\": []\n                }\n            ]\n        },\n        {\n            \"id\": 18,\n            \"parentId\": 0,\n            \"name\": \"管理部门\",\n            \"children\": []\n        },\n        {\n            \"id\": 19,\n            \"parentId\": 0,\n            \"name\": \"测试部门\",\n            \"children\": []\n        },\n        {\n            \"id\": 20,\n            \"parentId\": 0,\n            \"name\": \"测试部门2\",\n            \"children\": []\n        },\n        {\n            \"id\": 21,\n            \"parentId\": 0,\n            \"name\": \"测试部门3\",\n            \"children\": [\n                {\n                    \"id\": 22,\n                    \"parentId\": 21,\n                    \"name\": \"测试部门4\",\n                    \"children\": []\n                },\n                {\n                    \"id\": 23,\n                    \"parentId\": 21,\n                    \"name\": \"测试部门6\",\n                    \"children\": []\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/TreeController.java",
    "groupTitle": "Tree"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "新增用户",
    "version": "1.0.0",
    "name": "addUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loginId",
            "description": "<p>登陆用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "gender",
            "description": "<p>性别 (0：男，1：女)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userNumber",
            "description": "<p>用户编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "idType",
            "description": "<p>证件类型 0：身份证，1：护照(用户信息表中填身份证号)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idNumber",
            "description": "<p>证件号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nation",
            "description": "<p>民族</p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": false,
            "field": "roleIds",
            "description": "<p>角色</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "departmentId",
            "description": "<p>部门id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/UserController.java",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/users/{id}",
    "title": "删除用户",
    "version": "1.0.0",
    "name": "deleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/UserController.java",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/first",
    "title": "首次登陆修改信息",
    "version": "1.0.0",
    "name": "firstLoginUpdateInfo",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loginId",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>旧密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>新密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactPhone",
            "description": "<p>联系人电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactEmail",
            "description": "<p>联系人手机</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/UserController.java",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/{id}",
    "title": "获取用户详情",
    "version": "1.0.0",
    "name": "getUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.loginId",
            "description": "<p>登陆用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.gender",
            "description": "<p>性别 (0：男，1：女)</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.userStatus",
            "description": "<p>用户状态 (-1：删除，0：启用，1：停用)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.userNumber",
            "description": "<p>用户编号</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.idType",
            "description": "<p>证件类型 0：身份证，1：护照(用户信息表中填身份证号)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.idNumber",
            "description": "<p>证件号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.nation",
            "description": "<p>民族</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":{\n         \"id\":1,\n         \"loginId\":\"hzsun\",\n         \"name\":\"正元智慧\",\n         \"phone\":\"13822222222\",\n         \"gender\":1,\n         \"userStatus\":1,\n         \"email\":\"1343545@qq.com\",\n         \"userNumber\":\"333333333\",\n         \"idType\":0,\n         \"idNumber\":\"33124195411133214\",\n         \"nation\":\"001\",\n         \"roleIds\":[1,2,3]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/UserController.java",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "获取用户列表",
    "version": "1.0.0",
    "name": "getUserList",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "companyId",
            "description": "<p>所属单位id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "departmentId",
            "description": "<p>所属部门id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>当前页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>查询条数</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.content",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.content.id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.userName",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.roleName",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.content.userStatus",
            "description": "<p>用户状态(-1：删除，0：启用，1：停用)</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.content.departmentId",
            "description": "<p>所属部门id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.departmentName",
            "description": "<p>所属部门名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.content.gender",
            "description": "<p>用户性别（0：男，1：女）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content.createTime",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.total",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":{\n         \"content\":[{\n             \"id\":1,\n             \"userName\":\"叶凡\",\n             \"roleName\":\"管理员\",\n             \"userStatus\":0,\n             \"departmentId\":1,\n             \"departmentName\":\"财务部\",\n             \"gender\":1,\n             \"phone\":\"13888888888\",\n             \"createTime\":\"2020-04-08 15:30:30\"\n             },\n             {\n             \"id\":2,\n             \"userName\":\"叶凡\",\n             \"roleName\":\"管理员\",\n             \"userStatus\":0,\n             \"departmentId\":1,\n             \"departmentName\":\"财务部\",\n             \"gender\":1,\n             \"phone\":\"13888888888\",\n             \"createTime\":\"2020-04-08 15:30:30\"\n             }\n         ],\n         \"total\":20\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/UserController.java",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/isFirst/{userId}",
    "title": "是否首次登陆",
    "version": "1.0.0",
    "name": "isFirstLogin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data",
            "description": "<p>1是，0不是</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/UserController.java",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users",
    "title": "修改用户",
    "version": "1.0.0",
    "name": "updateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loginId",
            "description": "<p>登陆用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "gender",
            "description": "<p>性别 (0：男，1：女)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userNumber",
            "description": "<p>用户编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "idType",
            "description": "<p>证件类型 0：身份证，1：护照(用户信息表中填身份证号)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idNumber",
            "description": "<p>证件号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nation",
            "description": "<p>民族</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/UserController.java",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/{id}/{userStatus}",
    "title": "更新用户状态",
    "version": "1.0.0",
    "name": "updateUserStatus",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "userStatus",
            "description": "<p>用户状态</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\":0,\n     \"sysCode\":\"xxx\",\n     \"msg\":\"xxx\",\n     \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "uias-manager-service/src/main/java/com/hzsun/ccd/manager/controller/UserController.java",
    "groupTitle": "User"
  }
] });
