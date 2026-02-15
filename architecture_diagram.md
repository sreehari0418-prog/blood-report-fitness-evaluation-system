```mermaid
graph TD
    %% Architecture Diagram for Blood Report Fitness Evaluation System
    
    User((User))
    
    subgraph Frontend_App [Frontend Application]
        direction TB
        ReactUI[React.js + Vite<br/>(User Interface)]
        Tailwind[TailwindCSS<br/>(Styling)]
        Tesseract[Tesseract.js<br/>(OCR Engine)]
        PDFJS[pdf.js<br/>(PDF Parser)]
    end
    
    subgraph Backend_API [Backend API]
        direction TB
        Flask[Python Flask<br/>(Server & APIs)]
        Scikit[Scikit-learn<br/>(Disease Prediction)]
        OpenCV[Image Processing]
    end
    
    subgraph Data_Layer [Data Storage]
        Firebase[(Firebase Firestore<br/>User Data)]
        LocalStorage[(LocalStorage<br/>Session Data)]
    end
    
    subgraph Mobile_Wrapper [Mobile]
        Capacitor[Capacitor<br/>(Android Build)]
    end

    %% Connections
    User <--> ReactUI
    ReactUI <--> Flask
    ReactUI --> Tesseract
    ReactUI --> LocalStorage
    Flask <--> Firebase
    Flask --> Scikit
    Capacitor -.-> ReactUI
```
