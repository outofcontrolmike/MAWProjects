/*Goal is to convert the object below. The desired output is listed below.
    The output is just grouping all of the call_types for a region as well as keeping the grand total.
Desired output:
items = [
    {
    name: "test"
    region: 28
    spam: 1
    total: 4
    wrong_company: 3
    },
    {
    name: "AutomaticRegionEdit00be6"
    region: 26
    total: 1
    wrong_company: 1
    },
    {
    client_cancellation: 1
    name: "Testing"
    price_shopping: 2
    region: 29
    total: 6
    wrong_company: 3
    }
]

*/
<script>
    
</script>
let items =  [
    {
        "region": 29,
        "call_type": 6,
        "call_types": {
            "pkey": 6,
            "type": "Client Cancellation"
        },
        "regions": {
            "pkey": 29,
            "account": 1,
            "name": "Testing"
        },
        "count": "1"
    },
    {
        "region": 29,
        "call_type": 9,
        "call_types": {
            "pkey": 9,
            "type": "Price Shopping"
        },
        "regions": {
            "pkey": 29,
            "account": 1,
            "name": "Testing"
        },
        "count": "2"
    },
    {
        "region": 28,
        "call_type": 10,
        "call_types": {
            "pkey": 10,
            "type": "SPAM"
        },
        "regions": {
            "pkey": 28,
            "account": 1,
            "name": "test"
        },
        "count": "1"
    },
    {
        "region": 26,
        "call_type": 11,
        "call_types": {
            "pkey": 11,
            "type": "Wrong Company (see notes)"
        },
        "regions": {
            "pkey": 26,
            "account": 1,
            "name": "AutomaticRegionEdit00be6"
        },
        "count": "1"
    },
    {
        "region": 29,
        "call_type": 11,
        "call_types": {
            "pkey": 11,
            "type": "Wrong Company (see notes)"
        },
        "regions": {
            "pkey": 29,
            "account": 1,
            "name": "Testing"
        },
        "count": "3"
    },
    {
        "region": 28,
        "call_type": 11,
        "call_types": {
            "pkey": 11,
            "type": "Wrong Company (see notes)"
        },
        "regions": {
            "pkey": 28,
            "account": 1,
            "name": "test"
        },
        "count": "3"
    }
];