def XtCalc(M,Mw,Mo,T,F):
    return Te*(((Mo*Mw)/(F*M/1000)+(Mw/2000000)))


Ma=Mass= float(input("Enter the mass of the sAMPLE in mg"))
Mw=Molecular_weight= float(input("Enter the molecular weight of the sample"))
Mo=Moment= float(input("Enter the moment in emu"))
Te=Temp= float(input("Enter the temperature in Kelvin"))
F=Field= float(input("Enter the field in Oe"))

Xt= XtCalc(Ma,Mw,Mo,Te,F)
print(f"The XT product is : {Xt}")
