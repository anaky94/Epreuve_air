chaine1="bonjour je suis toto"

chaine2= "et toi ?"

chaine3= "je suis sur"

nouvelle_chaine= chaine1+ "" + chaine2+ chaine3
print(nouvelle_chaine)

try : 

    mot=["bonjour","je suis ", "toto"]

    nouvelle_phrase=" ".join(mot)
    print(nouvelle_phrase)
except:
    print("eror")