from pprint import pprint


def normalize_data(str):
    rows = str.split('\n')

    normalized = []

    for row in rows:
        print('--------------------------')
        normal = {}
        vals = row.split(':')

        print(vals)

        if len(vals) == 1:
            normal['value'] = ''
        else:
            normal['value'] = vals[1].lstrip(' ')
        normal['name'] = vals[0].lstrip('\t').strip(' ')
        normal['level'] = tab_level(row)

        normalized.append(normal)
        print(normal)

    pprint(normalized)

    return normalized

    # print(tab_levels)

def tab_level(s):
    return s.count('\t')

# Then feed the first-step output into the following function:
def ttree_to_json(ttree,level=0):
    result = {}
    for i in range(0,len(ttree)):
        cn = ttree[i]
        try:
            nn  = ttree[i+1]
        except:
            nn = {'level':-1}

        # Edge cases
        if cn['level']>level:
            continue
        if cn['level']<level:
            return result

        # Recursion
        if nn['level']==level:
            dict_insert_or_append(result,cn['name'],cn['value'])
        elif nn['level']>level:
            # print(cn['name'])
            rr = ttree_to_json(ttree[i+1:], level=nn['level'])
            dict_insert_or_append(result,cn['name'],rr)
            # dict_insert_or_append(result,cn['name'],cn['value'])
        else:
            dict_insert_or_append(result,cn['name'],cn['value'])
            return result
    return result

def dict_insert_or_append(adict,key,val):
    """Insert a value in dict at key if one does not exist
    Otherwise, convert value to list and append
    """
    if key in adict:
        if type(adict[key]) != list:
            adict[key] = [adict[key]]
        adict[key].append(val)
    else:
        adict[key] = val

content = ''
with open('../txt/small_data.txt') as f:
    content = f.read()

print(content)


normalized_data = normalize_data(content)

pprint(normalized_data)

results = {}
lowest = 1000 # arbitrarily high value
for item in normalized_data:
    if item['level'] < lowest:
        lowest = item['level']
