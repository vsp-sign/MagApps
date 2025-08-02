import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
#import ChiTCalculator

st.set_page_config('MagApps', '*')
st.markdown('### MAGAPPS')

st.sidebar.markdown("## Fill in the sample and file details \n ---")

XT_plot = st.container()
XT, ChiInverse = XT_plot.columns(2)

with st.sidebar.form("FileInfo"):
    Mw = st.number_input("Molecular Weight (g/mol)")
    Mass = st.number_input("Mass (mg)")
    FileType = st.radio(" File type", ['MPMS', 'PPMS'])
    File = st.file_uploader("Data file")

    skiplines = 0
    if FileType == "MPMS":
        skiplines = 40
    elif FileType == "PPMS":
        skiplines = 33
    
    submitted = st.form_submit_button("FormSubmit")
    df = pd.read_csv(File, skiprows=skiplines).dropna(axis=1, how='all').dropna(subset=['Moment (emu)'])

    if submitted:
        st.write("Data submitted")
        st.write(f"Number of lines skipped {skiplines}")
        XT_plot.write(" Data is being analysed....")
        #XT.write(df['Moment (emu)'].count())
        
def molarchi(Moment, Field, Mw, Mass):
    X_dia = -Mw / 2e-4
    MM = ((Moment / Field*1000*Mw) / Mass ) #-X_dia
    return MM

fig, ax = plt.subplots()
T = df['Temperature (K)'].values
MM = molarchi(df['Moment (emu)'].values, 100, Mw, Mass)
ax.plot(T, MM*T, label='VSM Moment')   
ax.set_xlabel('Temperature (K)')
ax.set_ylabel('ChiT')
ax.set_title('ChiT Plot')
ax.legend()  

fig2, ax = plt.subplots()
ax.plot(df['Temperature (K)'].values, 1/df['Moment (emu)'].values, label='VSM Moment') 
ax.set_xlabel('Temperature (K)')
ax.set_ylabel('Moment (emu)')
ax.set_title('Inverse Chi Plot')
ax.legend()  

if submitted:
    XT.pyplot(fig)
    ChiInverse.pyplot(fig2)
#   XT.dataframe(df['Moment (emu)'])
#XT_Tab, MH_Tab = st.tabs(["ChiT", "MvsH"]) 
#st.sidebar.success("Done!")
