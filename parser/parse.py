from pprint import pprint

def normalize_data(str):
    rows = str.split('\n')
    normalized = []

    for row in rows:
        normal = {}
        vals = row.split(':')

        if len(vals) == 1:
            normal['value'] = ''
        else:
            normal['value'] = vals[1].lstrip(' ')

        normal['name'] = vals[0].lstrip('\t').strip(' ')
        normal['level'] = tab_level(row)
        normalized.append(normal)

    return normalized


def tab_level(s):
    return s.count('\t')


def dict_insert_or_append(adict,key,val):
    """Insert a value in dict at key if one does not exist
    Otherwise, convert value to list and append
    """
    
    
    # print('------------------------')
    # print ("adict:",adict,'\nkey:', key, '\nval:', val)

    if key in adict:
        print('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nin here')
        if type(adict[key]) != list:
            adict[key] = [adict[key]]
        adict[key].append(val)
    else:
        adict[key] = val

content = ''
with open('../txt/small_data.txt') as f:
    content = f.read()

print('--------------------------------------------')
normalized_data = normalize_data(content)
pprint(normalized_data)
print('--------------------------------------------')

def create_tree(lst, level = 0, previous_node = None):
    # cn = current node
    # nn = next node
    result = {}
    for i in range(len(lst)):
        # print(lst[i])
        cn = lst[i]

        # print(cn['level'])
        try:
            nn = lst[i+1]
        except:
            nn = {'level': -1}

        if cn['level'] > level:
            print('\n-----------------')
            print(cn['name'])
            print(cn['value'])
            continue
        elif cn['level'] < level:
            print('\n****************')
            print('prev', previous_node)
            print('name', cn['name'])
            print('val ', cn['value'])

            return result

        # Recursion
        product = {}

        if nn['level']==level:
            
            product['sku'] = cn['name']
            product['description'] = ''
            product['img'] = ''
            product['name'] = ''
            product['link'] = ''

            dict_insert_or_append(result, 'results', [product])
            return result

            # dict_insert_or_append(result,cn['item'],product)

        elif nn['level']>level:
            rr = create_tree(lst[i+1:], level=nn['level'], previous_node=cn)

            if cn['name'] == 'question':
                result['question'] = {}
                dict_insert_or_append(result['question'], 'text', cn['value'])
                dict_insert_or_append(result['question'], 'options', [rr])
            else:
                result['answer'] = {}
                dict_insert_or_append(result['answer'], 'text', cn['value'])
                dict_insert_or_append(result['answer'], 'step', [rr])

    return result


json = create_tree(normalized_data)
pprint(json)