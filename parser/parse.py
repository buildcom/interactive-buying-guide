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


def create_tree(lst, level = 0, previous_node = None):
    # cn = current node
    # nn = next node
    result = {}
    for i in range(len(lst)):
        print('________________________________________________________________________________')

        

        # print(lst[i])
        cn = lst[i]

        if cn['name'] == 'answer':
            print('\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n')
            print(cn)

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

# returns array of lowest number of indents
def highest_level(lst):
    highest_val = -1
    for item in lst:
        if item['level'] > highest_val:
            highest_val = item['level']
    return highest_val

# returns array of lowest number of indents
def lowest_level(lst):
    lowest_val = 1000

    for item in lst:
        if item['level'] < lowest_val:
            lowest_val = item['level']
    return lowest_val

# returns array of lowest items, array of lowest item indexes
def lowest_items(lst):
    lowest = lowest_level(lst)
    lowest_items = [item for item in lst if item['level'] == lowest]
    lowest_items_index = [s for s in range(len(lst)) if lst[s]['level']==lowest]
    return lowest_items, lowest_items_index

def remove_used_items(lst, indexes):
    for n in range(len(indexes)):
        lst[n]['level'] = 1001 + lst[n]['level']
    return lst

def prep_results(data, results={}):
    lowest = lowest_level(data)
    highest = highest_level(data)

    lowest_lst, lowest_lst_index = lowest_items(data)
    # print(lowest_lst, lowest_lst_index)

    # if len(lowest_lst) == 1:
    print('-----------------------------------------------\n'+ \
        '-----------------------------------------------\nprepping results\n')
    q = {}
    q['question'] = lowest_lst[0]['value']
    q['options'] = []
    results['question'] = q

    data = remove_used_items(data, lowest_lst_index)
    # pprint(data)
    # print('------\nstarting results:')
    # print(results)
    # create_results(data, results)
    return data, results

def create_results(data, results = {}):

    lowest_lst, lowest_lst_index = lowest_items(data)


    if lowest_lst[0]['name'] == 'question':
        print('-----------------------------------------------\nquestion zone')
        # if len(low)
        for ques in lowest_lst:    
            q = {}
            q['question'] = lowest_lst[0]['value']
            q['options'] = []
            print(q)

    elif lowest_lst[0]['name'] == 'answer':
        print('-----------------------------------------------\nanswer zone')
        for ans in lowest_lst:
            a = {}
            a['answer'] = {}
            a['text'] = ans['value']
            a['step'] = {}
            a['products'] = []
            print(a)
    else:
        print('-----------------------------------------------\nproduct zone')
        for prod in lowest_lst:
            p = {}
            p['img'] = ''
            p['description'] = ''
            p['sku'] = prod['name']
            p['link'] = ''
            print(p)

    print('-----------------------------------------------\nend')
    print(results)

    return results



    # print(data)
    # print('--')
    # data = remove_used_items(data, lowest_lst_index)
    # pprint(data)



    # for item in lowest_lst:
    #     print(item)


content = ''
with open('../txt/q3.txt') as f:
    content = f.read()

print('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
normalized_data = normalize_data(content)
print(highest_level(normalized_data))
# pprint(normalized_data)
# print('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')

prep_data, prep_results = prep_results(normalized_data)

print('prep data:')
pprint(prep_data)
print('\nprep results:')
print(prep_results)

print('\n----------------------------------------------\n'+ \
    '----------------------------------------------\ncreating results:')


pprint(create_results(prep_data, prep_results))