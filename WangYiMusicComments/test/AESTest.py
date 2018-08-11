from Crypto.Cipher import AES
import base64


'''
pycryptodome 为 pycryto的后记版本, pycrypto 已经不维护了, pycryptodome 现在继续维护, 支持python3.6 版本

pycryptodome 中 key(密钥), iv(偏移值)都为字节
pycrypto 中 key(密钥), iv(偏移值)都为字符
'''


def AES_encrypt(text, key, iv):
    pad = 16 - len(text) % 16  # 14
    text = text + pad * chr(pad)  # 变为长度能够整除16 的字符串
    key = key.encode('utf-8')
    text = text.encode('utf-8')
    iv = iv.encode('utf-8')
    encryptor = AES.new(key, AES.MODE_CBC, iv)
    encrypt_text = encryptor.encrypt(text)
    encrypt_text = base64.b64encode(encrypt_text)
    return encrypt_text


text = AES_encrypt('{"rid":"R_SO_4_35283291","offset":"0","total":"true","limit":"20","csrf_token":""}',
                   '0CoJUm6Qyw8W8jud', '0102030405060708')

text = AES_encrypt(text.decode('utf-8'),
                   'FFFFFFFFFFFFFFFF', '0102030405060708')

print(text)
